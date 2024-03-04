import { model, Schema, models } from "mongoose";

export interface IComment {
	_id: string;
	text: string;
	commentedBy: string;
	postId: string;
	createdAt?: string;
	updatedAt?: string;
}

const commentSchema = new Schema(
	{
		text: {
			type: String,
			required: true,
		},
		commentedBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
	},
	{ timestamps: true }
);

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
