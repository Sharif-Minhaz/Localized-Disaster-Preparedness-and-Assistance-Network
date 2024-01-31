"use server";

import { FilterQuery, SortOrder } from "mongoose";

import Project from "../models/ProjectModel";
import { connectToDB } from "../mongoose";
import slugify from "slugify";
import { revalidatePath } from "next/cache";
import { deleteUTImage } from "./helpers.action";
import { redirect } from "next/navigation";
import { convertToPlainObj } from "../utils";

interface Props {
	heading: string;
	from: string;
	to: string;
	partnerOrganizations?: string;
	description: string;
	details: string;
	image: string;
	slug?: string;
}

export async function createProject(data: Props) {
	try {
		connectToDB();

		const { heading, partnerOrganizations, description, from, to, details, image } = data;

		const res = await Project.create({
			slug: slugify(heading.toString(), {
				lower: true,
				strict: true,
				remove: /[*+~.()'"!:@]/g,
			}),
			heading,
			from,
			to,
			partnerOrganizations,
			description,
			details,
			image,
		});

		revalidatePath("/projects");
		return convertToPlainObj(res);
	} catch (error) {
		console.error(error);
	}
}

export async function updateProject(data: Props) {
	try {
		connectToDB();
		const projectDetails: Props | null = await Project.findOne({ slug: data.slug })
			.select("image")
			.lean();

		if (projectDetails) {
			if (data.image !== projectDetails.image) {
				await deleteUTImage(projectDetails.image);
			}
		}

		const updateProject = await Project.findOneAndUpdate(
			{ slug: data.slug },
			{
				...data,
				slug: slugify(data.heading.toString(), {
					lower: true,
					strict: true,
					remove: /[*+~.()'"!:@]/g,
				}),
			}
		);

		if (!updateProject) {
			throw new Error("Project not found");
		}

		revalidatePath("/projects");
		return convertToPlainObj(updateProject);
	} catch (error) {
		// Handle any errors
		console.error("Error updating project information:", error);
		throw error;
	}
}

export async function fetchProject(slug: string) {
	try {
		connectToDB();

		const projectDetails = await Project.findOne({ slug }).lean();

		return convertToPlainObj(projectDetails);
	} catch (error) {
		// Handle any errors
		console.error("Error fetching project details:", error);
		throw error;
	}
}

export async function fetchProjects({
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

		// Calculate the number of projects to skip based on the page number and page size.
		const skipAmount = (pageNumber - 1) * pageSize;

		// Create a case-insensitive regular expression for the provided search string.
		const regex = new RegExp(searchString, "i");

		// Create an initial query object to filter projects.
		const query: FilterQuery<typeof Project> = {};

		// If the search string is not empty, add the $or operator to match either username or name fields.
		if (searchString.trim() !== "") {
			query.$or = [
				{ heading: { $regex: regex } },
				{ description: { $regex: regex } },
				{ details: { $regex: regex } },
			];
		}

		// Define the sort options for the fetched projects based on createdAt field and provided sort order.
		const sortOptions = { createdAt: sortBy };

		// Count the total number of projects that match the search criteria (without pagination).
		const totalCommunitiesCount = await Project.countDocuments(query);

		// Create a query to fetch the projects based on the search and sort criteria.
		const projects = await Project.find(query)
			.sort(sortOptions)
			.skip(skipAmount)
			.limit(pageSize)
			.lean();

		// Check if there are more projects beyond the current page.
		const isNext = totalCommunitiesCount > skipAmount + projects.length;

		return { projects: convertToPlainObj(projects), isNext };
	} catch (error) {
		console.error("Error fetching projects:", error);
		throw error;
	}
}

export async function deleteProject(slug: string) {
	try {
		connectToDB();
		const projectDetails: Props | null = await Project.findOne({ slug }).select("image").lean();

		if (projectDetails) {
			await deleteUTImage(projectDetails.image);
		}

		// Find the project by its slug and delete it
		const deletedProject = await Project.findOneAndDelete({
			slug,
		});

		if (!deletedProject) {
			throw new Error("Project not found");
		}

		revalidatePath("/projects");
		redirect("/projects");
	} catch (error) {
		console.error("Error deleting projects:", error);
		throw error;
	}
}
