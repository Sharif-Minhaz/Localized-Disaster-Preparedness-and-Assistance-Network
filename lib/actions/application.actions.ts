"use server";

import { FilterQuery, SortOrder } from "mongoose";

import User from "../models/UserModel";

import { connectToDB } from "../mongoose";
import { convertToPlainObj } from "../utils";
import { revalidatePath } from "next/cache";
import { deleteUTImage, sendMail } from "./helpers.action";
import Application, { IApplication } from "../models/ApplicationModel";
import Notification from "../models/NotificationModel";

export async function createApplication({
	name,
	documentImg,
	why,
	createdBy,
}: {
	name: string;
	documentImg: string;
	why: string;
	createdBy: string;
}) {
	try {
		await connectToDB();

		// Find the user with the provided unique id
		const user = await User.findOne({ clerkId: createdBy });

		if (!user) {
			throw new Error("User not found"); // Handle the case if the user with the id is not found
		}

		const newApplication = new Application({
			name,
			documentImg,
			why,
			createdBy: user._id,
			members: [user._id],
		});

		const createdApplication = await newApplication.save();

		revalidatePath("/communities");
		revalidatePath("/");
		return convertToPlainObj(createdApplication);
	} catch (error) {
		// Handle any errors
		console.error("Error creating community:", error);
		throw error;
	}
}

export async function fetchApplication(createdBy: string) {
	try {
		await connectToDB();
		const application = await Application.findOne({ createdBy }).lean();

		return convertToPlainObj(application);
	} catch (error) {
		console.error("Error fetching application:", error);
		throw error;
	}
}

export async function fetchAllApplications() {
	try {
		await connectToDB();
		const applications = await Application.find({ status: "pending" }).lean();

		return convertToPlainObj(applications);
	} catch (error) {
		console.error("Error fetching applications:", error);
		throw error;
	}
}

export async function approveApplication(applicationId: string) {
	try {
		await connectToDB();

		const application: IApplication | null = await Application.findByIdAndUpdate(
			applicationId,
			{ status: "approved" },
			{ new: true }
		)
			.populate("createdBy")
			.lean();

		if (application?.status === "approved") {
			await Promise.all([
				User.findByIdAndUpdate(application.createdBy, { user_type: "volunteer" }),
				Notification.create({
					text: "Your request has been approved, login again to get full access",
					createdFor: application.createdBy,
				}),
				sendMail({
					to: [typeof application.createdBy !== "string" && application.createdBy.email],
					subject: "Volunteer Role",
					html: `<p>Congratulations! Your request for volunteer role has been approved, login again into the system to get full access.</p>
					    <p><a href='https://ldpan.vercel.app/voluntary'>Click to open site</a></p>
					`,
				}),
			]);
		}

		revalidatePath("/voluntary");
		return convertToPlainObj(application);
	} catch (error) {
		console.error("Error approving application:", error);
		throw error;
	}
}

export async function rejectApplication(applicationId: string) {
	try {
		await connectToDB();

		const application: IApplication | null = await Application.findByIdAndUpdate(
			applicationId,
			{ status: "rejected" },
			{ new: true }
		).lean();

		if (application?.status === "rejected") {
			await Promise.all([
				Notification.create({
					text: "Your request for volunteer has been rejected for mismatch issue",
					createdFor: application.createdBy,
				}),
				sendMail({
					to: [typeof application.createdBy !== "string" && application.createdBy.email],
					subject: "Volunteer Role",
					html: "<p>Sorry! Your request for volunteer role has been rejected for mismatch issues, your are not eligible for this role. If you still think this is a mistake, reply this mail with your say</p>",
				}),
			]);
		}

		revalidatePath("/voluntary");
		return convertToPlainObj(application);
	} catch (error) {
		console.error("Error rejecting application:", error);
		throw error;
	}
}
