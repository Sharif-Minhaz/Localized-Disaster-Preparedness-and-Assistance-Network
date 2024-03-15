"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
	responsive: true,
	maintainAspectRatio: true,
	devicePixelRatio: 2,
};

const initialData = {
	labels: ["Money Donation", "Resource Donation"],
	datasets: [
		{
			label: "Number of unit",
			data: [0],
			backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 206, 86, 0.2)"],
			borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 206, 86, 1)"],
			borderWidth: 1,
		},
	],
};

export default function DonationActivityPieChart({
	totalMoneyDonation,
	totalResourceDonation,
}: {
	totalMoneyDonation: number;
	totalResourceDonation: number;
}) {
	initialData.datasets[0].data = [totalMoneyDonation, totalResourceDonation];

	return (
		<div>
			<Pie key={Date.now()} data={initialData} options={options} />
		</div>
	);
}
