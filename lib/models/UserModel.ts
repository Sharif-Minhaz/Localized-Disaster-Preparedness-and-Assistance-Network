import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
	{
		userId: String,
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
