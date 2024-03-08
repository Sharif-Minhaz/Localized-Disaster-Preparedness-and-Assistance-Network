import { Bookmark, BookmarkCheck, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { DeleteConfirmationBox } from ".";
import { addBookmarkToPost, deletePost, removeBookmarkFromPost } from "@/lib/actions/post.actions";
import { Button } from "../ui/button";

export default function PostActionButtons({
	userId,
	createdBy,
	postId,
	userType,
	communitySlug,
	postBookmarked,
}: {
	userId: string;
	createdBy: string;
	userType: string;
	postId: string;
	communitySlug: string;
	postBookmarked: [string];
}) {
	const deletePostWithId = deletePost.bind(null, postId, communitySlug);
	const bookmarkPost = addBookmarkToPost.bind(null, userId, postId);
	const remBookmarkPost = removeBookmarkFromPost.bind(null, userId, postId);

	return (
		<>
			{userId === createdBy || userType === "admin" ? (
				<div className="border px-2.5 py-1.5 rounded-xl flex items-center gap-2">
					<Link href={`/communities/${communitySlug}/post/${postId}/update`}>
						<Pencil color="#4485ef" size={18} />
					</Link>
					<DeleteConfirmationBox action={deletePostWithId} iconSize="size-5" />
				</div>
			) : (
				<>
					{postBookmarked.includes(userId) ? (
						<form action={remBookmarkPost}>
							<Button
								className="rounded-[10px]"
								variant="outline"
								type="submit"
								size="icon"
							>
								<BookmarkCheck />
							</Button>
						</form>
					) : (
						<form action={bookmarkPost}>
							<Button
								className="rounded-[10px]"
								variant="outline"
								type="submit"
								size="icon"
							>
								<Bookmark />
							</Button>
						</form>
					)}
				</>
			)}
		</>
	);
}
