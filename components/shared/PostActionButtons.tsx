import { Bookmark, BookmarkCheck, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { DeleteConfirmationBox } from ".";
import { deletePost } from "@/lib/actions/post.actions";

export default function PostActionButtons({
	postId,
	communitySlug,
}: {
	postId: string;
	communitySlug: string;
}) {
	const deletePostWithId = deletePost.bind(null, postId, communitySlug);

	return (
		<div className="flex gap-1">
			<Link href={`/communities/${communitySlug}/post/${postId}/update`}>
				<Pencil color="blue" />
			</Link>
			<DeleteConfirmationBox action={deletePostWithId} iconSize="size-6" />
			<Bookmark />
			{/* <BookmarkCheck /> */}
		</div>
	);
}
