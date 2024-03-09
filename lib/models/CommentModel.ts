import { model, Schema, models } from "mongoose";
import { IUser } from "./UserModel";

export interface IComment {
	_id: string;
	comment: string;
	commentedBy: string | IUser;
	postId: string;
	createdAt?: string;
	updatedAt?: string;
}

const commentSchema = new Schema(
	{
		comment: {
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
