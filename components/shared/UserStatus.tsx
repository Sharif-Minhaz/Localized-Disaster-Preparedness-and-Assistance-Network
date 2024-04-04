"use client";

import { formatToShortDate } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function UserStatus() {
	const { isSignedIn, user, isLoaded } = useUser();

	let userInfo;

	if (!isLoaded) {
		return null;
	}

	if (isSignedIn && user) {
		userInfo = {
			imageUrl: user.imageUrl,
			username: user.username,
			createdAt: user.createdAt,
		};
	} else {
		return redirect("/");
	}

	return (
		<div className="flex items-center gap-4 rounded-[8px] dark:bg-slate-800 bg-slate-100 border px-3 py-2">
			<div className="relative">
				<Image
					draggable={false}
					width={32}
					height={32}
					src={userInfo.imageUrl}
					className="rounded"
					alt="profile_image"
				/>
				<span className="absolute bottom-0 left-6 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
			</div>
			<div className="font-medium dark:text-white">
				<div className="text-sm">{userInfo.username}</div>
				<div className="text-[10px] text-gray-700 dark:text-gray-400">
					Joined in {formatToShortDate(userInfo.createdAt)}
				</div>
			</div>
		</div>
	);
}
