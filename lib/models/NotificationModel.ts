import { model, Schema, models } from "mongoose";

export interface INotification {
	_id: string;
	text: string;
	createdFor: string;
	createdAt?: string;
	updatedAt?: string;
}

const notificationSchema = new Schema(
	{
		text: {
			type: String,
			required: true,
		},
		createdFor: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		isOpened: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Notification = models.Notification || model("Notification", notificationSchema);

export default Notification;
