"use server";

import Community from "../models/CommunityModel";
import Donation from "../models/DonationModel";
import User from "../models/UserModel";
import { connectToDB } from "../mongoose";
import { convertToPlainObj } from "../utils";

export interface DataMap {
	[key: string]: number;
}

export async function getDashboardBarData(year: string) {
	try {
		await connectToDB();

		// convert dates into ISO format
		const startOfYear = new Date(`${year}-01-01`);
		const endOfYear = new Date(`${year}-12-31`);

		const result = await Donation.aggregate([
			// match documents created in the specific year
			{
				$match: {
					donationType: "money",
					createdAt: {
						$gte: startOfYear,
						$lte: endOfYear,
					},
				},
			},
			// extract month from the createdAt field
			{
				$addFields: {
					month: { $month: "$createdAt" },
				},
			},
			// group by month and calculate total donation for each month
			{
				$group: {
					_id: "$month",
					totalDonation: { $sum: "$donationAmount" },
				},
			},
			// sort by month in ascending order
			{
				$sort: {
					_id: 1, // month field
				},
			},
		]);

		//create an object with total donation for each month
		const monthlyDonation: DataMap = {};
		for (let i = 1; i <= 12; i++) monthlyDonation[i] = 0;

		result.forEach((item) => {
			monthlyDonation[item._id] = item.totalDonation;
		});

		return monthlyDonation;
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
}

export async function getDashboardCardsInfo() {
	try {
		await connectToDB();

		const [totalUsers, totalVolunteers, totalCommunities] = await Promise.all([
			User.countDocuments({ user_type: "user" }),
			User.countDocuments({ user_type: "volunteer" }),
			Community.countDocuments(),
		]);

		return { totalUsers, totalVolunteers, totalCommunities };
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
}

export async function getDashboardChartData() {
	try {
		await connectToDB();

		const [totalMoneyDonation, totalResourceDonation] = await Promise.all([
			Donation.countDocuments({ donationType: "money" }),

			Donation.countDocuments({ donationType: "resource" }),
		]);

		return { totalMoneyDonation, totalResourceDonation };
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
}

export async function getResourcesData() {
	try {
		await connectToDB();

		const [resources, totalDonationUnits] = await Promise.all([
			Donation.find({ donationType: "resource" }).populate("donatedBy").lean(),
			Donation.aggregate([
				{
					$match: { donationType: "resource" },
				},
				{
					$group: {
						_id: null, // Group all documents into a single group
						totalDonationUnits: { $sum: "$donationUnit" }, // Sum the donationUnit field
					},
				},
			]),
		]);

		return {
			resources: convertToPlainObj(resources),
			total: totalDonationUnits[0]?.totalDonationUnits || 0,
		};
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
}
