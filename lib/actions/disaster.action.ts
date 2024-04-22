"use server";

import { connectToDB } from "../mongoose";
import { formatDateToISO } from "../utils";

export async function getDisasterPredictionRes({
	location,
	date,
}: {
	location: string;
	date: Date;
}) {
	try {
		await connectToDB();

		const formattedDate = formatDateToISO(date);

		// fetch disaster related data from external api
		const response = await fetch("https://disaster-prediction-model-api.onrender.com/predict", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ date: formattedDate, location }),
		});

		const result = await response.json();

		return result.data;
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
}
