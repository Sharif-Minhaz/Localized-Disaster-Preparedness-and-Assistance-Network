import { model, Schema, models } from "mongoose";
import { IUser } from "./UserModel";
import { IProject } from "./ProjectModel";

export interface IReport {
	_id: string;
	project: string | IProject;
	generatedBy: string | IUser;
	report: string;
	createdAt: string;
	updatedAt: string;
}

const reportSchema = new Schema(
	{
		project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
		generatedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
		report: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Report = models.Report || model("Report", reportSchema);

export default Report;
