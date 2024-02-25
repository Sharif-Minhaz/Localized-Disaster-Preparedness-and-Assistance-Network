"use server";

import { Donation as DonationProps } from "@/components/shared/DonationForm";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { connectToDB } from "../mongoose";
import Donation from "../models/DonationModel";
import { IProject } from "../models/ProjectModel";
import User, { IUser } from "../models/UserModel";
import { convertToPlainObj } from "../utils";
import { revalidatePath } from "next/cache";

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
		throw error;
	}
};

export const addDonation = async (donation: DonationProps, userId: string, project: IProject) => {
	try {
		connectToDB();

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
		connectToDB();

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

export const getDonationActivity = async () => {
	try {
		connectToDB();

		const donations = await Donation.find()
			.populate("donatedBy projectId")
			.sort({ createdAt: -1 })
			.lean();

		return convertToPlainObj(donations);
	} catch (error) {
		console.error(error);
		throw error;
	}
};
