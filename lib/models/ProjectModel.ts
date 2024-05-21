import { Schema, model, models } from "mongoose";
import { IUser } from "./UserModel";
import { Option } from "@/components/ui/multiple-selector";

export interface IProject {
	_id: string;
	slug: string;
	createdBy: string | IUser;
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
	volunteers: Option[];
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
		volunteers: [{ type: Schema.Types.ObjectId, ref: "User" }],
	},
	{ timestamps: true }
);

const Project = models.Project || model("Project", projectSchema);

export default Project;
