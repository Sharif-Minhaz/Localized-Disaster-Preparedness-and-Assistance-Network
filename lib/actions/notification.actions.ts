"use server";

import User from "../models/UserModel";

import { connectToDB } from "../mongoose";
import { convertToPlainObj } from "../utils";
import { revalidatePath } from "next/cache";
import Notification from "../models/NotificationModel";

export async function createNotification({
	text,
	createdFor,
}: {
	text: string;
	createdFor: string;
}) {
	try {
		await connectToDB();

		// Find the user with the provided unique id
		const user = await User.findOne({ clerkId: createdFor });

		if (!user) {
			throw new Error("User not found"); // Handle the case if the user with the id is not found
		}

		const newNotification = await Notification.create({
			text,
			createdFor: user._id,
		});

		return convertToPlainObj(newNotification);
	} catch (error) {
		// Handle any errors
		console.error("Error creating community:", error);
		throw error;
	}
}

export async function fetchAllNotifications(clerkId: string) {
	try {
		await connectToDB();

		// Find the user with the provided unique id
		const user = await User.findOne({ clerkId });

		if (!user) {
			throw new Error("User not found"); // Handle the case if the user with the id is not found
		}

		const notifications = await Notification.find({ createdFor: user._id }).sort("desc").lean();

		return convertToPlainObj(notifications);
	} catch (error) {
		console.error("Error fetching notification:", error);
		throw error;
	}
}
