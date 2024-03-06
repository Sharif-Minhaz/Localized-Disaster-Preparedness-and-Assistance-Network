import { Schema, model, models } from "mongoose";

export interface IUser {
	_id: string;
	clerkId: string;
	username: string;
	name?: string;
	email: string;
	imageUrl: string;
	user_type: "admin" | "user" | "volunteer";
	mobile: string;
	communities: string[];
	__v: number;
	createdAt: string;
	updatedAt: string;
}

const userSchema = new Schema(
	{
		clerkId: {
			type: String,
			required: true,
		},
		name: String,
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		imageUrl: String,
		user_type: {
			type: String,
			enum: ["admin", "user", "volunteer"],
			default: "user",
		},
		mobile: String,
		communities: [{ type: Schema.Types.ObjectId, ref: "Community" }],
	},
	{ timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
