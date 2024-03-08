"use server";

import Community from "../models/CommunityModel";
import User, { IUser } from "../models/UserModel";

import { connectToDB } from "../mongoose";
import { convertToPlainObj } from "../utils";
import { revalidatePath } from "next/cache";
import Post, { IPost } from "../models/PostModel";
import { redirect } from "next/navigation";
import Comment from "../models/CommentModel";
import { deleteUTImage } from "./helpers.action";

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
		await connectToDB();

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
		await connectToDB();

		const post = await Post.findById(id).populate("createdBy").lean();

		return convertToPlainObj(post);
	} catch (error) {
		console.error("Error fetching post:", error);
		throw error;
	}
}

export async function fetchAllUserPosts(clerkId?: string) {
	if (!clerkId) throw new Error("UserId required");

	try {
		await connectToDB();

		const userInfo: IUser | null = await User.findOne({ clerkId }).select("_id").lean();
		if (!userInfo) {
			throw new Error("user not found");
		}
		const posts = await Post.find({ createdBy: userInfo._id })
			.populate("createdBy communityId")
			.lean();

		return convertToPlainObj(posts);
	} catch (error) {
		console.error("Error fetching posts:", error);
		throw error;
	}
}

export async function fetchAllInAllPosts() {
	try {
		await connectToDB();

		const posts = await Post.find().populate("createdBy communityId").lean();

		return convertToPlainObj(posts);
	} catch (error) {
		console.error("Error fetching posts:", error);
		throw error;
	}
}

export async function fetchPosts({ communityId }: { communityId?: string }) {
	if (!communityId) throw new Error("CommunityId required");

	try {
		await connectToDB();

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
		await connectToDB();

		const postDetails: IPost | null = await Post.findById(postId).select("image").lean();

		if (postDetails?.image) {
			if (image !== postDetails.image) {
				await deleteUTImage(postDetails.image);
			}
		}

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

export async function deletePost(id: string, communitySlug: string) {
	try {
		await connectToDB();

		const community = await Community.findOne({ slug: communitySlug }).select("_id");

		const deletedPost = await Post.findOneAndDelete({
			_id: id,
			communityId: community._id,
		});

		if (!deletedPost) {
			throw new Error("Post not found");
		}

		if (deletedPost.image) {
			await deleteUTImage(deletedPost.image);
		}

		revalidatePath(`/communities/${communitySlug}`);
		revalidatePath("/my_posts");
		redirect(`/communities/${communitySlug}`);
	} catch (error) {
		console.error("Error deleting post: ", error);
		throw error;
	}
}

export async function addCommentToPost({ comment }: { comment: string }) {
	try {
		await connectToDB(); // TODO: COMMENT FACILITY
		return true;
	} catch (error) {
		console.error("Error commenting post: ", error);
		throw error;
	}
}

export async function fetchPostComments(postId: string) {
	try {
		await connectToDB();
		const comments = await Comment.find({ postId }).populate("commentedBy");
		return convertToPlainObj(comments);
	} catch (error) {
		console.error("Error fetching comments: ", error);
		throw error;
	}
}

export async function removeLikeFromPost(userId: string) {
	try {
		await connectToDB();
	} catch (error) {
		console.error("Error disliking post: ", error);
		throw error;
	}
}

export async function addLikeToPost(userId: string) {
	try {
		await connectToDB();
	} catch (error) {
		console.error("Error liking post: ", error);
		throw error;
	}
}

export async function addBookmarkToPost(userId: string, postId: string) {
	try {
		await connectToDB();

		const post: IPost | null = await Post.findById(postId).lean();

		if (!post) {
			throw new Error("Post not found");
		}

		const isAlreadyBookmarked = post.bookmarked.includes(userId);

		if (isAlreadyBookmarked) {
			throw new Error("Already bookmarked by the user.");
		}

		const postInfo = await Post.findByIdAndUpdate(
			postId,
			{ $addToSet: { bookmarked: userId } },
			{ new: true }
		);

		if (postInfo) {
			revalidatePath("/my_posts");
			return { success: true };
		}
		return { success: false };
	} catch (error) {
		console.error("Error bookmarking post: ", error);
		throw error;
	}
}

export async function removeBookmarkFromPost(userId: string, postId: string) {
	try {
		await connectToDB();

		const post: IPost | null = await Post.findById(postId).lean();

		if (!post) {
			throw new Error("Post not found");
		}

		const postInfo = await Post.findByIdAndUpdate(
			postId,
			{ $pull: { bookmarked: userId } },
			{ new: true }
		);

		if (postInfo) {
			revalidatePath("/my_posts");
			return { success: true };
		}
		return { success: false };
	} catch (error) {
		console.error("Error removing bookmarking post: ", error);
		throw error;
	}
}

export async function fetchUserBookmarkedPosts(clerkId?: string) {
	try {
		await connectToDB();
		const user: IUser | null = await User.findOne({ clerkId }).lean();

		if (!user) throw new Error("User not found");

		const posts: IPost[] | null = await Post.find({ bookmarked: { $in: [user._id] } }).populate(
			"createdBy communityId"
		);

		return convertToPlainObj(posts);
	} catch (error) {
		console.error("Error fetching posts: ", error);
		throw error;
	}
}
