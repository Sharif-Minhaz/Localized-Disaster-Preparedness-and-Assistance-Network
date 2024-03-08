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

export async function fetchUser(clerkId: string) {
	try {
		await connectToDB();

		const user = await User.findOne({ clerkId }).lean();

		if (!user) throw new Error("No user found");

		return convertToPlainObj(user);
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
}

export async function createUser({ clerkId, name, username, email, imageUrl }: Props) {
	try {
		await connectToDB();

		const newUser = await User.create({
			clerkId,
			name,
			username,
			email,
			imageUrl,
			user_type: "user",
		});

		return convertToPlainObj(newUser);
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
}

export async function updateUser({ clerkId, username, imageUrl }: Props) {
	try {
		await connectToDB();
		const updatedUser = await User.findOneAndUpdate(
			{ clerkId },
			{
				username,
				imageUrl,
			}
		);

		return convertToPlainObj(updatedUser);
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
}

export async function deleteUser(clerkId: string) {
	try {
		await connectToDB();

		const deletedUser = await User.findOneAndDelete({ clerkId });

		return convertToPlainObj(deletedUser);
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
}
