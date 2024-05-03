"use client";

import { DisasterValidation } from "@/lib/validations/disaster";
import { PredictionForm } from ".";
import * as z from "zod";
import { getDisasterPredictionRes } from "@/lib/actions/disaster.action";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { CloudSunRain, TriangleAlert } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PredictionResult() {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);

	const { toast } = useToast();

	// form submitter
	async function onSubmit(values: z.infer<typeof DisasterValidation>) {
		try {
			setLoading(true);

			const data = {
				date: values.date,
				location: values.location,
			};

			const result = await getDisasterPredictionRes(data);

			if (result.length) {
				toast({
					title: "Success: Disaster prediction",
					description: "Prediction generate successfully",
					action: <ToastAction altText="OK">OK</ToastAction>,
				});
				// updating the result
				setResults(result);
			}
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Failure: Disaster prediction",
				description: "Range error or limit exceed",
				action: <ToastAction altText="OK">OK</ToastAction>,
			});
			setResults([]); // reset the result in face error
			console.error(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="p-4">
			{/* prediction form */}
			<PredictionForm onSubmit={onSubmit} />

			{/* loading screen */}
			{loading && (
				<div className="px-3 py-6 mt-4 border grid place-content-center bg-[#3b82f60f]">
					<Image src="/gifs/radar.gif" height={230} width={230} alt="" />
				</div>
			)}

			{/* prediction response  */}
			{results.length !== 0 && !loading && (
				<div className="p-3 mt-4 border flex flex-col gap-3">
					{results.map((line: string, index: number) => {
						const isRisky = line.includes("Alert");
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: -100 }}
								viewport={{ once: true }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 * (index + 1) }}
							>
								<Alert
									className={
										isRisky
											? "!bg-[#e9b1b117]"
											: "text-green-600 !bg-[#65d1a51a]"
									}
									variant={isRisky ? "destructive" : "default"}
								>
									<div className={`flex gap-2`}>
										{isRisky ? (
											<TriangleAlert className="h-[18px] w-[18px]" />
										) : (
											<CloudSunRain className="h-[18px] w-[18px]" />
										)}
										<AlertTitle>{isRisky ? "Warning" : "No Risk"}</AlertTitle>
									</div>
									<AlertDescription className="pl-6">{line}</AlertDescription>
								</Alert>
							</motion.div>
						);
					})}
				</div>
			)}
		</div>
	);
}
