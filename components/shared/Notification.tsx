"use client";

import { Bell } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useEffect, useState } from "react";
import { fetchAllNotifications } from "@/lib/actions/notification.actions";
import { useUser } from "@clerk/nextjs";
import { INotification } from "@/lib/models/NotificationModel";
import { formatDate } from "@/lib/utils";

export default function Notification() {
	const [notifications, setNotifications] = useState<INotification[]>([]);
	const { user } = useUser();

	useEffect(() => {
		async function fetchData() {
			const notificationData = await fetchAllNotifications(user?.id || "");
			setNotifications(notificationData);
		}
		fetchData();
	}, [user]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center">
				<span className="inline-flex relative">
					<Bell />
					{notifications.length > 0 && (
						<span className="absolute inline-flex items-center justify-center w-5 h-5 text-[9px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
							{notifications.length}
						</span>
					)}
				</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="mr-4">
				<DropdownMenuLabel>Notifications</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{notifications?.map((notification) => (
					<DropdownMenuItem
						className="max-w-[320px] sm:max-w-[400px]"
						key={notification._id}
					>
						<p>
							{notification.text} -{" "}
							<strong className="font-semibold">
								{formatDate(notification?.createdAt)}
							</strong>
						</p>
					</DropdownMenuItem>
				))}
				{!notifications.length && (
					<DropdownMenuItem>No notification available right now.</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
