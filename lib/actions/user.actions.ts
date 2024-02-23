"use server";

import User from "../models/UserModel";
import { connectToDB } from "../mongoose";
import { convertToPlainObj } from "../utils";

interface Props {
	clerkId: string;
	name: string;
	username: string;
	email: string;
	imageUrl?: string;
}

export async function createUser({ clerkId, name, username, email, imageUrl }: Props) {
	try {
		connectToDB();

		const newUser = await User.create({
			clerkId,
			name,
			username,
			email,
			imageUrl,
			user_type: "user",
		});

		return convertToPlainObj(newUser);
	} catch (error) {
		console.error(error);
	}
}

export async function updateUser({ clerkId, username, imageUrl }: Props) {
	try {
		connectToDB();
		const updatedUser = await User.findOneAndUpdate(
			{ clerkId },
			{
				username,
				imageUrl,
			}
		);

		return convertToPlainObj(updatedUser);
	} catch (error) {
		console.error(error);
	}
}

export async function deleteUser(clerkId: string) {
	try {
		connectToDB();

		const deletedUser = await User.findOneAndDelete({ clerkId });

		return convertToPlainObj(deletedUser);
	} catch (error) {
		console.error(error);
	}
}
