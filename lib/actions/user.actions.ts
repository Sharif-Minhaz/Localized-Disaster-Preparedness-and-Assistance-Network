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

export async function updateUser({ userId, username, imageUrl }: Props) {
	try {
		connectToDB();
		console.log("in update user");
		const updatedUser = await User.findOneAndUpdate(
			{ userId },
			{
				username,
				imageUrl,
			}
		);

		return updatedUser;
	} catch (error) {
		console.error(error);
	}
}

export async function deleteUser(userId: string) {
	try {
		connectToDB();

		const deletedUser = await User.findOneAndDelete({ userId });

		return deletedUser;
	} catch (error) {
		console.error(error);
	}
}
