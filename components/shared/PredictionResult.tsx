"use client";

import { DisasterValidation } from "@/lib/validations/disaster";
import { PredictionForm } from ".";
import * as z from "zod";
import { getDisasterPredictionRes } from "@/lib/actions/disaster.action";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useState } from "react";

export default function PredictionResult() {
	const [results, setResults] = useState([]);

	const { toast } = useToast();

	// form submitter
	async function onSubmit(values: z.infer<typeof DisasterValidation>) {
		const data = {
			date: values.date,
			location: values.location,
		};

		const res = await getDisasterPredictionRes(data);

		if (res) {
			toast({
				title: "Success: Disaster prediction",
				description: "Prediction generate successfully",
				action: <ToastAction altText="OK">OK</ToastAction>,
			});
		}
	}

	return (
		<div className="p-4">
			<PredictionForm onSubmit={onSubmit} />
		</div>
	);
}
