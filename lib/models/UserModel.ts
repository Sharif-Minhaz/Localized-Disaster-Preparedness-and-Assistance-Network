import { Schema, model, models } from "mongoose";

export interface IUser {
	_id: string;
	clerkId: string;
	username: string;
	name?: string;
	email: string;
	imageUrl: string;
	user_type: "admin" | "user";
	mobile: string;
	communities: string[];
	__v: number;
	createdAt: string;
	updatedAt: string;
}

const userSchema = new Schema(
	{
		clerkId: String,
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
			enum: ["admin", "user"],
			default: "user",
		},
		mobile: String,
		communities: [{ type: Schema.Types.ObjectId, ref: "Community" }],
	},
	{ timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
