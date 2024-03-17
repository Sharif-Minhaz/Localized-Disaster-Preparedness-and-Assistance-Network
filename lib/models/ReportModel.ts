import { model, Schema, models } from "mongoose";
import { IProject } from "./ProjectModel";

export interface IReport {
	_id: string;
	project: string | IProject;
	donatedResource: any;
	donatedAmount: number;
	totalAmount: number;
	totalResource: any;
	createdAt: string;
	updatedAt: string;
}

const reportSchema = new Schema(
	{
		project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
		donatedAmount: Number,
		totalAmount: Number,
		donatedResource: Schema.Types.Mixed,
		totalResource: Schema.Types.Mixed,
	},
	{ timestamps: true }
);

const Report = models.Report || model("Report", reportSchema);

export default Report;
