"use server";

import User from "../models/UserModel";
import { connectToDB } from "../mongoose";

interface Props {
	userId: string;
	name: string;
	username: string;
	email: string;
	imageUrl?: string;
}

export async function createUser({ userId, name, username, email, imageUrl }: Props) {
	try {
		console.log("database section.------------------------------");
		connectToDB();

		const newUser = await User.create({
			userId,
			name,
			username,
			email,
			imageUrl,
			user_type: "user",
		});

		return newUser;
	} catch (error) {
		console.error(error);
	}
}
