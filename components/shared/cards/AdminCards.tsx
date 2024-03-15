"use client";

import { Users, UserRoundCog, Globe, LucideIcon } from "lucide-react";
import { InfoCard } from "..";

export interface IInfo {
	title: string;
	count: number;
	bg: string;
	des: string;
	icon: LucideIcon;
}

export default function AdminCards({
	totalUsers,
	totalVolunteers,
	totalCommunities,
}: {
	totalUsers: number;
	totalVolunteers: number;
	totalCommunities: number;
}) {
	const dataSet = [
		{
			title: "Total Users",
			bg: "bg-gradient-warn",
			des: "All registered users",
			icon: Users,
			count: totalUsers,
		},
		{
			title: "Total Volunteers",
			bg: "bg-gradient-info",
			des: "All accepted volunteers",
			icon: UserRoundCog,
			count: totalVolunteers,
		},
		{
			title: "Total Communities",
			bg: "bg-gradient-success",
			des: "Available communities",
			icon: Globe,
			count: totalCommunities,
		},
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
			{dataSet.map((data, index) => (
				<InfoCard key={index} data={data as IInfo} />
			))}
		</div>
	);
}
