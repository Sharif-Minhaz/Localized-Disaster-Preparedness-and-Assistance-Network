"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
	responsive: true,
	maintainAspectRatio: true,
	devicePixelRatio: 2,
};

const initialData = {
	labels: ["Total", "Donation", "Donation received"],
	datasets: [
		{
			label: "Number of dosages",
			data: [4, 6, 70],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(153, 102, 255, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(153, 102, 255, 1)",
			],
			borderWidth: 1,
		},
	],
};

export default function DonationActivityPieChart() {
	const [data, setData] = useState(initialData);
	const [key, setKey] = useState(0);

	useEffect(() => {
		setKey((prev) => prev + 1);
	}, []);

	return (
		<div className="">
			<Pie key={key} data={data} options={options} />
		</div>
	);
}
