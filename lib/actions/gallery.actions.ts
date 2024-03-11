"use server";

import { revalidatePath } from "next/cache";
import Gallery from "../models/GalleryModel";
import { connectToDB } from "../mongoose";
import { fetchUser } from "./user.actions";
import { IUser } from "../models/UserModel";

interface IProps {
	heading: string;
	description: string;
	image: string;
}

export const addGalleyImage = async (clerkId: string, gallery: IProps) => {
	try {
		await connectToDB();
		if (!clerkId) throw new Error("Uploader Identification invalid");

		const userInfo: IUser | null = await fetchUser(clerkId);

		if (!userInfo) throw new Error("User information not found");

		const newGallery = await Gallery.create({ ...gallery, addedBy: userInfo._id });

		if (newGallery) {
			revalidatePath("/gallery");
			return { success: true };
		}
		return { success: false };
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const fetchImages = async () => {
	try {
		await connectToDB();

		const images = await Gallery.find().populate("addedBy").lean();

		return images;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
