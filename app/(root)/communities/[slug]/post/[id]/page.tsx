export const revalidate = 600; // revalidate in every 10 min

import { Author, CommentBody, CommentForm, Like, PostActionButtons } from "@/components/shared";
import { fetchAllInAllPosts, fetchPost, fetchPostComments } from "@/lib/actions/post.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { IComment } from "@/lib/models/CommentModel";
import { IPost } from "@/lib/models/PostModel";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

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

export default async function SinglePostPage({ params }: { params: { slug: string; id: string } }) {
	const post: IPost = await fetchPost(params.id);

	const user = await currentUser();
	if (!user) return redirect("/");
	const userInfo = await fetchUser(user.id);

	const comments: IComment[] = await fetchPostComments(params.id);

	if (!post || !user) return redirect("/organization");

	const likeable = userInfo ? !post.likes.includes(userInfo?._id) : true;

	return (
		<article className="max-w-[650px] mx-auto border rounded-xl shadow pb-5">
			<div className="flex justify-between p-4">
				<Author creationDate={post.createdAt} imgSize={40} userInfo={post.createdBy} />
				<PostActionButtons
					userId={userInfo?._id}
					createdBy={
						typeof post.createdBy === "string" ? post.createdBy : post.createdBy._id
					}
					userType={userInfo.user_type}
					postId={params.id}
					postBookmarked={post.bookmarked}
					communitySlug={params.slug}
				/>
			</div>
			<div className="relative h-[300px] w-full">
				<Image
					fill
					className="object-cover"
					src={post.image || "/dummy.png"}
					alt="post-img"
				/>
			</div>
			<div className="p-4">{post.description}</div>
			{/* --------------- like post -------------- */}
			<div className="p-4">
				<Like
					postId={post._id}
					likeable={likeable}
					userId={userInfo._id}
					likeCount={post.likes.length}
				/>
			</div>
			<div className="border-b border-slate-200 dark:border-slate-900" />
			{/* -------------=- comment -=--------------- */}
			<div className="p-4">
				<CommentForm
					communitySlug={params.slug}
					postId={post._id}
					userImg={user.imageUrl}
					userId={userInfo._id}
				/>
			</div>
			<div className="border-t border-slate-200 dark:border-slate-900" />
			<div className="p-4 flex flex-col gap-5">
				{comments.map((comment: IComment) => (
					<CommentBody comment={comment} key={comment._id} />
				))}
				{comments.length === 0 && (
					<p className="text-sm text-slate-500">No comment to show.</p>
				)}
			</div>
		</article>
	);
}
