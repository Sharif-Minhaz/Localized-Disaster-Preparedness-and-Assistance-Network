"use client";

import { Bookmark, BookmarkCheck, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

export default function PostActionButtons({
	postId,
	communitySlug,
}: {
	postId: string;
	communitySlug: string;
}) {
	return (
		<div className="flex gap-1">
			<Link href={`/communities/${communitySlug}/post/${postId}/update`}>
				<Pencil color="blue" />
			</Link>
			<Trash2 color="red" />
			<Bookmark />
			<BookmarkCheck />
		</div>
	);
}
