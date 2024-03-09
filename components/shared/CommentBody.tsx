import { IComment } from "@/lib/models/CommentModel";
import { Author } from ".";

export default function CommentBody({ comment }: { comment: IComment }) {
	return (
		<div className="ml-3">
			<div className="damn relative">
				<Author
					userInfo={comment.commentedBy}
					imgSize={40}
					creationDate={comment.createdAt}
				/>
			</div>
			<p className="text-sm ml-[21px] pl-[26px] mt-1 border-l-2">{comment.comment}</p>
		</div>
	);
}
