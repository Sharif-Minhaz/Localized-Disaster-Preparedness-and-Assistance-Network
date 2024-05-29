"use client";

import * as z from "zod";
import { Button } from "../../ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Compass } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { DisasterValidation } from "@/lib/validations/disaster";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useContext, useEffect, useState } from "react";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { locations } from "@/constants";
import { SelectPredictionDate } from "..";
import { MainContext } from "@/contexts/MainContext";
import { toast } from "@/components/ui/use-toast";

export default function PredictionForm({
	onSubmit,
}: {
	onSubmit: (values: z.infer<typeof DisasterValidation>) => void;
}) {
	const { theme } = useContext(MainContext);
	const [captcha, setCaptcha] = useState({ disable: true, value: "", message: "" });

	const form = useForm({
		resolver: zodResolver(DisasterValidation),
		defaultValues: {
			date: new Date(),
			location: "",
		},
	});

	// TODO: temporary fix for late response from the api model
	const wakeApi = () => {
		fetch("https://disaster-prediction-model-api.onrender.com/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	function onChange(value: string | null) {
		if (value) {
			return setCaptcha({ disable: false, value, message: "Verified" });
		}

		setCaptcha((prev) => ({ ...prev, message: "Verification failed" }));
		toast({ variant: "destructive", title: "Verification failed" });
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
				<div onClick={wakeApi} className="grid gap-4 sm:grid-cols-2 grid-cols-1">
					<FormField
						control={form.control}
						name="location"
						render={({ field }) => (
							<FormItem className="flex gap-1 flex-col">
								<FormLabel htmlFor="location">Select your location</FormLabel>
								<FormControl>
									<Select
										onValueChange={(e) => {
											field.onChange(e);
											wakeApi();
										}}
										defaultValue={field.value}
									>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Select a location" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Locations</SelectLabel>
												{locations.map((location) => (
													<SelectItem
														key={location}
														value={location.toLowerCase()}
													>
														{location}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem className="flex gap-1 flex-col">
								<FormLabel htmlFor="date">Select your prediction date</FormLabel>
								<FormControl>
									<SelectPredictionDate
										value={field.value}
										handler={field.onChange}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				{/* ----- recaptcha ----- */}
				<ReCAPTCHA
					key={theme}
					theme={theme as "dark" | "light"}
					sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
					onChange={onChange}
					onExpired={() => setCaptcha((prev) => ({ ...prev, disable: true }))}
				/>
				<div className="pb-5 space-x-3">
					<Button disabled={captcha.disable || form.formState.isSubmitting} type="submit">
						<Compass size={17} className="mr-2" /> Get 7 days Prediction
					</Button>
				</div>
			</form>
		</Form>
	);
}
