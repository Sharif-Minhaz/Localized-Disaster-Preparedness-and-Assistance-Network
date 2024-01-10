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
		partnerOrganizations: {
			type: String,
			default: "N/A",
		},
		projectPeriod: {
			type: String,
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
	},
	{ timestamps: true }
);

const Project = models.Project || model("Project", projectSchema);

export default Project;
