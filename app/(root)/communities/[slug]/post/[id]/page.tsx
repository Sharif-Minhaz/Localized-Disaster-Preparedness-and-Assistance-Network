import { Author, CommentBody, CommentForm, Like, PostActionButtons } from "@/components/shared";
import { fetchAllInAllPosts, fetchPost, fetchPostComments } from "@/lib/actions/post.actions";
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
	const comments: IComment[] = await fetchPostComments(params.id);

	if (!post || !user) return redirect("/organization");

	return (
		<article className="max-w-[650px] mx-auto border rounded-xl shadow">
			<div className="flex justify-between p-4">
				<Author creationDate={post.createdAt} imgSize={40} userInfo={post.createdBy} />
				<PostActionButtons postId={params.id} communitySlug={params.slug} />
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
				<Like />
			</div>
			<div className="border-b border-slate-200" />
			{/* -------------=- comment -=--------------- */}
			<div className="p-4">
				<CommentForm userImg={user.imageUrl} userId={user.id} />
			</div>
			<div className="p-4">
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
