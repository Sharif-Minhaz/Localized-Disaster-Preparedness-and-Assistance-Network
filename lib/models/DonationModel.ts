import { Schema, model, models } from "mongoose";

const donationSchema = new Schema(
	{
		donatedBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
			immutable: true,
		},
		projectId: {
			type: Schema.Types.ObjectId,
			ref: "Project",
			required: true,
			immutable: true,
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
		note: String,
	},
	{ timestamps: true }
);

const Donation = models.Donation || model("Donation", donationSchema);

export default Donation;
