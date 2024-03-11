import { model, Schema, models } from "mongoose";

export interface IGallery {
	_id: string;
	image: string;
	heading: string;
	description: string;
	createdAt: string;
}

const gallerySchema = new Schema(
	{
		addedBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: String,
		},
		image: {
			type: String,
			required: true,
		},
		heading: {
			type: String,
			required: true,
		},
		description: { type: String, required: true },
	},
	{ timestamps: true }
);

const Gallery = models.Gallery || model("Gallery", gallerySchema);

export default Gallery;
