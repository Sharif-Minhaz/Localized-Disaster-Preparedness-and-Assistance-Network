import { model, Schema, models } from "mongoose";
import { IUser } from "./UserModel";
import { ICommunity } from "./CommunityModel";

export interface IPost {
	_id: string;
	communityId: string | ICommunity;
	description: string;
	image?: string;
	createdBy: string | IUser;
	likes: [string];
	bookmarked: [string];
	createdAt: string;
	updatedAt: string;
}

const postSchema = new Schema(
	{
		communityId: { type: Schema.Types.ObjectId, ref: "Community", required: true },
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
		bookmarked: [{ type: Schema.Types.ObjectId, ref: "User" }],
	},
	{ timestamps: true }
);

const Post = models.Post || model("Post", postSchema);

export default Post;
