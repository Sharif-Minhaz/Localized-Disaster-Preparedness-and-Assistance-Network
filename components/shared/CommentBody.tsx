import { IComment } from "@/lib/models/CommentModel";
import { Author } from ".";

export default function CommentBody({ comment }: { comment: IComment }) {
	return (
		<div className="ml-3">
			<Author userInfo={comment.commentedBy} imgSize={40} creationDate={comment.createdAt} />
			<p className="text-sm ml-12 mt-1">{comment.comment}</p>
		</div>
	);
}
