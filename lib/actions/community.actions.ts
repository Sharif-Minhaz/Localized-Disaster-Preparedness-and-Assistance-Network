"use server";

import { FilterQuery, SortOrder } from "mongoose";

import Community from "../models/CommunityModel";
import User from "../models/UserModel";

import { connectToDB } from "../mongoose";
import { convertToPlainObj } from "../utils";
import slugify from "slugify";

export async function createCommunity(
	name: string,
	image: string,
	bio: string,
	createdById: string // Change the parameter name to reflect it's an id
) {
	try {
		connectToDB();

		// Find the user with the provided unique id
		const user = await User.findOne({ clerkId: createdById });

		if (!user) {
			throw new Error("User not found"); // Handle the case if the user with the id is not found
		}

		const newCommunity = new Community({
			name,
			slug: `${slugify(name.toString(), {
				lower: true,
				strict: true,
				remove: /[*+~.()'"!:@]/g,
			})}-${Date.now()}`,
			image,
			bio,
			createdBy: user._id, // Use the mongoose ID of the user
		});

		const createdCommunity = await newCommunity.save();

		// Update User model
		user.communities.push(createdCommunity._id);
		await user.save();

		return createdCommunity;
	} catch (error) {
		// Handle any errors
		console.error("Error creating community:", error);
		throw error;
	}
}

export async function fetchCommunityDetails(slug: string) {
	try {
		connectToDB();

		const communityDetails = await Community.findOne({ slug }).populate([
			"createdBy",
			{
				path: "members",
				model: User,
			},
		]);

		return convertToPlainObj(communityDetails);
	} catch (error) {
		// Handle any errors
		console.error("Error fetching community details:", error);
		throw error;
	}
}

export async function fetchCommunities({
	searchString = "",
	pageNumber = 1,
	pageSize = 20,
	sortBy = "desc",
}: {
	searchString?: string;
	pageNumber?: number;
	pageSize?: number;
	sortBy?: SortOrder;
}) {
	try {
		connectToDB();

		// Calculate the number of communities to skip based on the page number and page size.
		const skipAmount = (pageNumber - 1) * pageSize;

		// Create a case-insensitive regular expression for the provided search string.
		const regex = new RegExp(searchString, "i");

		// Create an initial query object to filter communities.
		const query: FilterQuery<typeof Community> = {};

		// If the search string is not empty, add the $or operator to match either username or name fields.
		if (searchString.trim() !== "") {
			query.$or = [{ name: { $regex: regex } }, { bio: { $regex: regex } }];
		}

		// Define the sort options for the fetched communities based on createdAt field and provided sort order.
		const sortOptions = { createdAt: sortBy };

		// Count the total number of communities that match the search criteria (without pagination).
		const totalCommunitiesCount = await Community.countDocuments(query);

		// Create a query to fetch the communities based on the search and sort criteria.
		const communities = await Community.find(query)
			.sort(sortOptions)
			.skip(skipAmount)
			.limit(pageSize)
			.populate("members")
			.lean();

		// Check if there are more communities beyond the current page.
		const isNext = totalCommunitiesCount > skipAmount + communities.length;

		return { communities: convertToPlainObj(communities), isNext };
	} catch (error) {
		console.error("Error fetching communities:", error);
		throw error;
	}
}

export async function addMemberToCommunity(slug: string, memberId: string) {
	try {
		connectToDB();

		// Find the community by its unique id
		const community = await Community.findOne({ slug });

		if (!community) {
			throw new Error("Community not found");
		}

		// Find the user by their unique id
		const user = await User.findOne({ clerkId: memberId });

		if (!user) {
			throw new Error("User not found");
		}

		// Check if the user is already a member of the community
		if (community.members.includes(user._id)) {
			throw new Error("User is already a member of the community");
		}

		// Add the user's _id to the members array in the community
		community.members.push(user._id);
		await community.save();

		// Add the community's _id to the communities array in the user
		user.communities.addToSet(community._id);
		await user.save();

		return community;
	} catch (error) {
		// Handle any errors
		console.error("Error adding member to community:", error);
		throw error;
	}
}

export async function removeUserFromCommunity(clerkId: string, slug: string) {
	try {
		connectToDB();

		const userIdObject = await User.findOne({ clerkId }, { _id: 1 });
		const communityIdObject = await Community.findOne({ slug }, { _id: 1 });

		if (!userIdObject) {
			throw new Error("User not found");
		}

		if (!communityIdObject) {
			throw new Error("Community not found");
		}

		await Promise.all([
			// Remove the user's _id from the members array in the community
			Community.updateOne(
				{ _id: communityIdObject._id },
				{ $pull: { members: userIdObject._id } }
			),
			// Remove the community's _id from the communities array in the user
			User.updateOne(
				{ _id: userIdObject._id },
				{ $pull: { communities: communityIdObject._id } }
			),
		]);

		return { success: true };
	} catch (error) {
		// Handle any errors
		console.error("Error removing user from community:", error);
		throw error;
	}
}

interface IUpdateComProps {
	communityId: string;
	name: string;
	bio: string;
	image: string;
}

export async function updateCommunityInfo({ communityId, name, bio, image }: IUpdateComProps) {
	try {
		connectToDB();

		// Find the community by its _id and update the information
		const updatedCommunity = await Community.findOneAndUpdate(
			{ id: communityId },
			{
				name,
				bio,
				image,
				slug: `${slugify(name, {
					lower: true,
					strict: true,
					remove: /[*+~.()'"!:@]/g,
				})}-${Date.now()}`,
			}
		);

		if (!updatedCommunity) {
			throw new Error("Community not found");
		}

		return updatedCommunity;
	} catch (error) {
		// Handle any errors
		console.error("Error updating community information:", error);
		throw error;
	}
}

export async function deleteCommunity(communityId: string) {
	try {
		connectToDB();
		// Find the community by its ID and delete it
		const deletedCommunity = await Community.findOneAndDelete({
			_id: communityId,
		});

		if (!deletedCommunity) {
			throw new Error("Community not found");
		}

		// Find all users who are part of the community and pull the community id from them
		await User.updateMany(
			// @ts-ignore
			{ communities: deletedCommunity._id },
			// @ts-ignore
			{ $pull: { communities: deletedCommunity._id } }
		);

		return deletedCommunity;
	} catch (error) {
		console.error("Error deleting community: ", error);
		throw error;
	}
}
