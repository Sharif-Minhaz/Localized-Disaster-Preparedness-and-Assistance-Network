import {
	fetchAllUserPosts,
	fetchPosts,
	fetchUserBookmarkedPosts,
} from "@/lib/actions/post.actions";
import { Post } from ".";
import { IPost } from "@/lib/models/PostModel";

export default async function Posts({
	bookmarked,
	personal,
	clerkId,
	communityId,
}: {
	bookmarked?: boolean;
	personal?: boolean;
	clerkId?: string;
	communityId?: string;
}) {
	let posts;

	if (personal) {
		posts = await fetchAllUserPosts(clerkId);
	} else if (bookmarked) {
		posts = await fetchUserBookmarkedPosts(clerkId);
	} else {
		posts = await fetchPosts({ communityId });
	}

	if (!posts.length) {
		return (
			<div className="p-4">
				<p>Currently no post available.</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-5">
			{posts.map((post: IPost) => (
				<Post key={post._id} post={post} />
			))}
		</div>
	);
}
