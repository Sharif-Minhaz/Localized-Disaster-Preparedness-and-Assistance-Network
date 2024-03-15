"use client";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DataMap } from "@/lib/actions/dashboard.action";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
	maintainAspectRatio: true,
	responsive: true,
	devicePixelRatio: 2,
	plugins: {
		legend: {
			position: "top",
		},
	},
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const initialData = {
	labels,
	datasets: [
		{
			label: "Donation Amounts (BDT)",
			data: [0],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(255, 159, 64, 0.2)",
				"rgba(255, 205, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(201, 203, 207, 0.2)",
			],
			borderColor: [
				"rgb(255, 99, 132)",
				"rgb(255, 159, 64)",
				"rgb(255, 205, 86)",
				"rgb(75, 192, 192)",
				"rgb(54, 162, 235)",
				"rgb(153, 102, 255)",
				"rgb(201, 203, 207)",
			],
			borderWidth: 1,
		},
	],
};

export default function DonationBarChart({ donationBarData }: { donationBarData: DataMap }) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleChange = (value: string) => {
		const params = new URLSearchParams(searchParams);

		params.set("query", value.toString());

		replace(`${pathname}?${params}`);
	};

	initialData.datasets[0].data = Object.values(donationBarData);

	return (
		<div className="shadow p-4 border rounded-xl">
			<Select onValueChange={handleChange}>
				<SelectTrigger className="w-[150px] rounded-tl-xl">
					<SelectValue placeholder="Select a year" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Years</SelectLabel>
						<SelectItem value="2023">2023</SelectItem>
						<SelectItem value="2024">2024</SelectItem>
						<SelectItem value="2025">2025</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			{/* @ts-ignore */}
			<Bar key={Date.now()} options={options} data={initialData} />
		</div>
	);
}
