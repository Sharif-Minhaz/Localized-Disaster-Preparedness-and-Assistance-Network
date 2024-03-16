import { Schema, model, models } from "mongoose";
import { IUser } from "./UserModel";
import { IProject } from "./ProjectModel";

export interface IDonation {
	_id: string;
	donatedBy: string | IUser;
	projectId: string | IProject;
	stripeId?: string;
	donationType: "money" | "resource";
	donationAmount?: number;
	donationUnit?: number;
	resourceName?: string;
	shipperName?: string;
	mobile: string;
	note?: string;
	__v: number;
	createdAt: string;
	updatedAt: string;
}

const donationSchema = new Schema(
	{
		donatedBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		projectId: {
			type: Schema.Types.ObjectId,
			ref: "Project",
			required: true,
		},
		stripeId: String,
		donationType: {
			type: String,
			required: true,
			enum: ["money", "resource"],
		},
		donationAmount: {
			type: Number,
			required: function () {
				return (this as { donationType: string }).donationType === "money";
			},
		},
		donationUnit: {
			type: Number,
			required: function () {
				return (this as { donationType: string }).donationType === "resource";
			},
		},
		resourceName: {
			type: String,
			required: function () {
				return (this as { donationType: string }).donationType === "resource";
			},
		},
		shipperName: {
			type: String,
			required: function () {
				return (this as { donationType: string }).donationType === "resource";
			},
		},
		mobile: {
			type: String,
			required: true,
		},
		note: {
			type: String,
			maxLength: 500,
		},
	},
	{ timestamps: true }
);

const Donation = models.Donation || model("Donation", donationSchema);

export default Donation;
