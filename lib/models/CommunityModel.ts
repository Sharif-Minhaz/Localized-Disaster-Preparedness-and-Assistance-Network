import { model, Schema, models } from "mongoose";

export interface ICommunity {
	_id: string;
	name: string;
	slug: string;
	bio?: string;
	image?: string;
	createdBy: string;
	members?: [string];
	createdAt: string;
	updatedAt: string;
}

const communitySchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			required: true,
		},
		bio: String,
		image: String,
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		members: [{ type: Schema.Types.ObjectId, ref: "User" }],
	},
	{ timestamps: true }
);

const Community = models.Community || model("Community", communitySchema);

export default Community;
