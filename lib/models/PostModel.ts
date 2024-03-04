import { model, Schema, models } from "mongoose";

export interface IPost {
	_id: string;
	description: string;
	image?: string;
	createdBy: string;
	likes: [string];
	createdAt?: string;
	updatedAt?: string;
}

const postSchema = new Schema(
	{
		description: {
			type: String,
			required: true,
		},
		image: String,
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
	},
	{ timestamps: true }
);

const Post = models.Post || model("Post", postSchema);

export default Post;
