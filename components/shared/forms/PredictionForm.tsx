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

export default function PredictionForm({
	onSubmit,
}: {
	onSubmit: (values: z.infer<typeof DisasterValidation>) => void;
}) {
	const form = useForm({
		resolver: zodResolver(DisasterValidation),
		defaultValues: {
			date: new Date(),
			location: "",
		},
	});

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
				<div className="grid gap-4 sm:grid-cols-2 grid-cols-1">
					<FormField
						control={form.control}
						name="location"
						render={({ field }) => (
							<FormItem className="flex gap-1 flex-col">
								<FormLabel htmlFor="location">Select your location</FormLabel>
								<FormControl>
									<Select
										onValueChange={field.onChange}
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

				<div className="pb-5 space-x-3">
					<Button disabled={form.formState.isSubmitting} type="submit">
						<Compass size={17} className="mr-2" /> Get Prediction
					</Button>
				</div>
			</form>
		</Form>
	);
}
