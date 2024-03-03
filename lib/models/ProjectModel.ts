import { Schema, model, models } from "mongoose";

export interface IProject {
	_id: string;
	slug: string;
	partnerOrganizations: string;
	image: string;
	from: string;
	to: string;
	heading: string;
	description: string;
	details: string;
	location: string;
	courierAddress: string;
	completed: boolean;
}

const projectSchema = new Schema(
	{
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		heading: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
			immutable: true,
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
