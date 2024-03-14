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
import { ChangeEvent, useEffect, useState } from "react";

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
			label: "Donation Requests",
			data: [12, 19, 3, 5, 2, 3],
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

export default function DonationBarChart() {
	const [data, setData] = useState(initialData);
	const [key, setKey] = useState(0);
	const [year, setYear] = useState(2023);

	const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
		setYear(event.target.value);
	};

	useEffect(() => {
		setKey((prev) => prev + 1);
	}, []);

	return (
		<div className="shadow p-4 border rounded-xl">
			{/* @ts-ignore */}
			<Bar key={key} options={options} data={data} />
		</div>
	);
}
