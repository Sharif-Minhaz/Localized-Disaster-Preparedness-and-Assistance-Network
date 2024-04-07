"use server";

import { revalidatePath } from "next/cache";
import Gallery from "../models/GalleryModel";
import { connectToDB } from "../mongoose";
import { fetchUser } from "./user.actions";
import { IUser } from "../models/UserModel";
import { convertToPlainObj } from "../utils";

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

export const fetchImages = async (offset: number = 0) => {
	const PAGE_SIZE = 6;
	try {
		await connectToDB();

		const skipAmount = offset ? (offset - 1) * PAGE_SIZE : 0;

		const images = await Gallery.find()
			.skip(skipAmount)
			.limit(PAGE_SIZE)
			.populate("addedBy")
			.lean();

		return convertToPlainObj(images);
	} catch (error) {
		console.error(error);
		throw error;
	}
};
