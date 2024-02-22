import { Schema, model, models } from "mongoose";

const projectSchema = new Schema(
	{
		heading: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			required: true,
		},
		partnerOrganizations: String,
		from: {
			type: Date,
			required: true,
		},
		to: {
			type: Date,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		details: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		courierAddress: {
			type: String,
			required: true,
		},
		completed: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Project = models.Project || model("Project", projectSchema);

export default Project;
