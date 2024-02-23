"use server";

import { Donation as DonationProps } from "@/components/shared/DonationForm";
import { Project } from "@/components/shared/ProjectsList";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { connectToDB } from "../mongoose";
import Donation from "../models/DonationModel";

export const checkoutDonation = async (
	donation: DonationProps,
	userId: string,
	project: Project
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

export const addDonation = async (donation: DonationProps, userId: string, project: Project) => {
	try {
		connectToDB();
		const saveDonation = await Donation.create({
			...donation,
			projectId: project._id,
			donatedBy: userId,
			donationAmount: Number(donation.donationAmount),
			donationUnit: Number(donation.donationUnit),
		});

		if (saveDonation) {
			return { status: "OK", code: 201 };
		}
		return { status: "ERROR", code: 500 };
	} catch (error) {
		throw error;
	}
};
