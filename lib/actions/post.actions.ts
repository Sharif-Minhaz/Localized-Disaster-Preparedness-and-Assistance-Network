"use server";

import Community from "../models/CommunityModel";
import User from "../models/UserModel";

import { connectToDB } from "../mongoose";
import { convertToPlainObj } from "../utils";
import { revalidatePath } from "next/cache";
import Post, { IPost } from "../models/PostModel";
import { redirect } from "next/navigation";
import Comment from "../models/CommentModel";

export async function createPost({
	communityId,
	image,
	description,
	createdBy,
}: {
	communityId: string;
	image?: string;
	description: string;
	createdBy: string;
}) {
	try {
		connectToDB();

		// Find the user with the provided unique id
		const [user, community] = await Promise.all([
			User.findOne({ clerkId: createdBy }),
			Community.findById(communityId),
		]);

		if (!user) {
			throw new Error("User not found"); // Handle the case if the user with the id is not found
		}

		const newPost = new Post({
			communityId,
			description,
			image,
			createdBy: user._id,
		});

		await newPost.save();

		revalidatePath(`/communities/${community.slug}`);
		revalidatePath("/my_posts");

		redirect(`/communities/${community.slug}`);
	} catch (error) {
		// Handle any errors
		console.error("Error creating community:", error);
		throw error;
	}
}

export async function fetchPost(id: string) {
	try {
		connectToDB();
		const post = await Post.findById(id).populate("createdBy").lean();

		return convertToPlainObj(post);
	} catch (error) {
		console.error("Error fetching post:", error);
		throw error;
	}
}

export async function fetchAllInAllPosts() {
	try {
		connectToDB();

		const posts = await Post.find().populate("createdBy communityId").lean();

		return convertToPlainObj(posts);
	} catch (error) {
		console.error("Error fetching posts:", error);
		throw error;
	}
}

export async function fetchPosts({ communityId }: { communityId: string }) {
	try {
		connectToDB();

		const posts = await Post.find({ communityId }).populate("createdBy communityId").lean();

		return convertToPlainObj(posts);
	} catch (error) {
		console.error("Error fetching posts:", error);
		throw error;
	}
}

interface IUpdatePostProps {
	postId: string;
	description: string;
	image?: string;
}

export async function updatePostInfo({ postId, description, image }: IUpdatePostProps) {
	try {
		connectToDB();

		// Find the community by its _id and update the information
		const updatedPost: IPost | null = await Post.findOneAndUpdate(
			{ _id: postId },
			{
				description,
				image,
			},
			{ new: true }
		);

		if (!updatedPost) {
			throw new Error("Post not found");
		}

		revalidatePath(`/communities/${updatedPost.communityId}`);
		revalidatePath(`/communities/${updatedPost.communityId}/post/${postId}`);
		revalidatePath("/my_posts");
		return convertToPlainObj(updatedPost);
	} catch (error) {
		// Handle any errors
		console.error("Error updating community information:", error);
		throw error;
	}
}

export async function deletePost(id: string) {
	try {
		connectToDB();
		// Find the community by its ID and delete it
		const deletedPost = await Community.findByIdAndDelete(id);

		if (!deletedPost) {
			throw new Error("Post not found");
		}

		revalidatePath(`/communities/${3}`); // TODO: SLUG
		revalidatePath("/my_posts");
		return convertToPlainObj(deletedPost);
	} catch (error) {
		console.error("Error deleting post: ", error);
		throw error;
	}
}

export async function addCommentToPost({ comment }: { comment: string }) {
	try {
		connectToDB(); // TODO: COMMENT FACILITY
		return true;
	} catch (error) {
		console.error("Error commenting post: ", error);
		throw error;
	}
}

export async function fetchPostComments(postId: string) {
	try {
		connectToDB();
		const comments = await Comment.find({ postId }).populate("commentedBy");
		return convertToPlainObj(comments);
	} catch (error) {
		console.error("Error fetching comments: ", error);
		throw error;
	}
}
