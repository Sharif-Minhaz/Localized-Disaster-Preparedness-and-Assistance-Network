import { Users, HeartHandshake, ClipboardCheck } from "lucide-react";
import { InfoCard } from "..";

const structures = [
	{
		title: "Total Users",
		count: 22,
		bg: "bg-gradient-warn",
		des: "All registered users",
		icon: Users,
	},
	{
		title: "Donated by User",
		bg: "bg-gradient-info",
		des: "Donated medicine category",
		icon: HeartHandshake,
		count: 30,
	},
	{
		title: "Donation Application",
		bg: "bg-gradient-success",
		des: "User's donation request",
		icon: ClipboardCheck,
		count: 12,
	},
];

export default function AdminCards() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
			{structures.map((data, index) => (
				<InfoCard key={index} data={data} />
			))}
		</div>
	);
}
