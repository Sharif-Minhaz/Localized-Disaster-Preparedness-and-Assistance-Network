"use server";

import { Donation as DonationProps } from "@/components/shared/forms/DonationForm";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { connectToDB } from "../mongoose";
import Donation from "../models/DonationModel";
import { IProject } from "../models/ProjectModel";
import User, { IUser } from "../models/UserModel";
import { convertToPlainObj } from "../utils";
import { revalidatePath } from "next/cache";
import { FilterQuery, SortOrder } from "mongoose";

export const checkoutDonation = async (
	donation: DonationProps,
	userId: string,
	project: IProject
) => {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

	const price = Number(donation?.donationAmount) * 100; // paisa to taka

	try {
		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price_data: {
						currency: "bdt",
						unit_amount: price,
						product_data: {
							name: project.heading,
						},
					},
					quantity: 1,
				},
			],
			metadata: {
				donatedBy: userId,
				projectId: project._id,
				mobile: donation.mobile,
				note: donation.note || "",
				donationType: donation.donationType,
				donationAmount: donation.donationAmount || "",
				donationUnit: donation.donationUnit || "",
				shipperName: donation.shipperName || "",
				resourceName: donation.resourceName || "",
			},
			mode: "payment",
			success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/donation-history`,
			cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/projects/${project.slug}`,
		});

		redirect(session.url!);
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const addDonation = async (donation: DonationProps, userId: string, project: IProject) => {
	try {
		await connectToDB();

		const saveDonation = await Donation.create({
			...donation,
			projectId: project._id,
			donatedBy: userId,
			donationAmount: Number(donation.donationAmount) / 100,
			donationUnit: Number(donation.donationUnit),
		});

		if (saveDonation) {
			revalidatePath("/donation-history");
			revalidatePath("/activity");
			revalidatePath("/dashboard");
			return { status: "OK", code: 201 };
		}
		return { status: "ERROR", code: 500 };
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const getUserDonationHistory = async (clerkId: string) => {
	try {
		await connectToDB();

		const user: IUser | null = await User.findOne({ clerkId }).select("_id").lean();
		let donations;

		if (user) {
			donations = await Donation.find({ donatedBy: user._id })
				.populate("donatedBy projectId")
				.sort({ createdAt: -1 })
				.lean();
		}

		return convertToPlainObj(donations);
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const getDonationActivity = async ({
	searchString = "",
	pageNumber = 1,
	pageSize = 20,
	sortBy = "desc",
}: {
	searchString?: string;
	pageNumber?: number;
	pageSize?: number;
	sortBy?: SortOrder;
}) => {
	try {
		await connectToDB();

		// Calculate the number of projects to skip based on the page number and page size.
		const skipAmount = (pageNumber - 1) * pageSize;

		// Create a case-insensitive regular expression for the provided search string.
		const regex = new RegExp(searchString, "i");

		// Create an initial query object to filter donations.
		const query: FilterQuery<typeof Donation> = {};

		// If the search string is not empty, add the $or operator to match either shippingName or name resource or amount.
		if (searchString.trim() !== "") {
			query.$or = [
				{ resourceName: { $regex: regex } },
				{ mobile: { $regex: regex } },
				{ shipperName: { $regex: regex } },
				{ note: { $regex: regex } },
			];
		}

		// Define the sort options for the fetched projects based on createdAt field and provided sort order.
		const sortOptions = { createdAt: sortBy };

		// Count the total number of projects that match the search criteria (without pagination).
		const totalDonationsCount = await Donation.countDocuments(query);

		// Create a query to fetch the projects based on the search and sort criteria.
		const donations = await Donation.find(query)
			.populate("donatedBy projectId")
			.sort(sortOptions)
			.skip(skipAmount)
			.limit(pageSize)
			.lean();

		// Check if there are more projects beyond the current page.
		const isNext = totalDonationsCount > skipAmount + donations.length;

		return { donations: convertToPlainObj(donations), isNext };
	} catch (error) {
		console.error(error);
		throw error;
	}
};
