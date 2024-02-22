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
		donationType: {
			type: String,
			required: true,
			enum: ["money", "resource"],
		},
		donationAmount: {
			type: Number,
			min: 1,
			validate: {
				validator: function (this: any) {
					return this.donationAmount !== undefined || this.donationUnit !== undefined;
				},
				message: "Either donationAmount or donationUnit is required.",
			},
		},
		donationUnit: {
			type: Number,
			min: 1,
			validate: {
				validator: function (this: any) {
					return this.donationAmount !== undefined || this.donationUnit !== undefined;
				},
				message: "Either donationAmount or donationUnit is required.",
			},
		},
		resourceName: {
			type: String,
			validate: {
				validator: function (this: any) {
					return this.donationType === "resource" && this.resourceName === undefined;
				},
				message: "Resource name is required.",
			},
		},
		shipperName: {
			type: String,
			validate: {
				validator: function (this: any) {
					return this.donationType === "resource" && this.shipperName === undefined;
				},
				message: "Donation courier name is required.",
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
