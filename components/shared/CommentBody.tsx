import { IComment } from "@/lib/models/CommentModel";

export default function CommentBody({ comment }: { comment: IComment }) {
	return <div>CommentBody: {comment.text}</div>;
}
