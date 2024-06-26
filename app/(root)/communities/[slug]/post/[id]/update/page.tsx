import { Container, PostForm } from "@/components/shared";
import { fetchCommunity } from "@/lib/actions/community.actions";
import { fetchAllInAllPosts, fetchPost } from "@/lib/actions/post.actions";
import { IPost } from "@/lib/models/PostModel";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Post Update",
};

export async function generateStaticParams() {
	try {
		const allPosts = await fetchAllInAllPosts();

		const staticParams = allPosts.map((post: IPost) => ({
			slug: typeof post.communityId === "string" ? "" : post.communityId.slug,
			id: post._id,
		}));

		return staticParams;
	} catch (error) {
		console.error("Error generating static params:", error);
		return [];
	}
}

export default async function UpdatePostPage({ params }: { params: { id: string; slug: string } }) {
	const [user, post, community] = await Promise.all([
		currentUser(),
		fetchPost(params.id),
		fetchCommunity(params.slug),
	]);

	if (!user || !post || !community) {
		return redirect("/");
	}

	return (
		<Container headingText="Update Post">
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<PostForm
					update
					post={post}
					userId={user.id}
					communitySlug={community.slug}
					communityId={community._id}
				/>
			</div>
		</Container>
	);
}
