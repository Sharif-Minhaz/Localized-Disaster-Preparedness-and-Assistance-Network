import { model, Schema, models } from "mongoose";
import { IUser } from "./UserModel";

export interface IApplication {
	_id: string;
	name: string;
	why: string;
	documentImg: string;
	createdBy: string | IUser;
	createdAt?: string;
	updatedAt?: string;
	status: "pending" | "rejected" | "approved";
}

const applicationSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		why: {
			type: String,
			required: true,
		},
		documentImg: {
			type: String,
			required: true,
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		status: {
			type: String,
			enum: ["pending", "rejected", "approved"],
			default: "pending",
		},
	},
	{ timestamps: true }
);

const Application = models.Application || model("Application", applicationSchema);

export default Application;
