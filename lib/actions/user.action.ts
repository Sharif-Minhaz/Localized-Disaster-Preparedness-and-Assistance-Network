"use server";

import { connectToDB } from "../mongoose";

export async function createUser() {
	try {
		connectToDB();
	} catch (error) {
		console.error(error);
	}
}
