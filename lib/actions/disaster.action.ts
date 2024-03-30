"use server";

import { connectToDB } from "../mongoose";

export async function getDisasterPredictionRes({
	location,
	date,
}: {
	location: string;
	date: Date;
}) {
	try {
		await connectToDB();

		return [{}];
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
}
