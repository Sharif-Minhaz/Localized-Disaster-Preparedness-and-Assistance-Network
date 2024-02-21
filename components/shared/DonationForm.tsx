"use client";

import * as z from "zod";
import { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DonationValidation } from "@/lib/validations/donation";

export default function DonationForm() {
	const form = useForm({
		resolver: zodResolver(DonationValidation),
		defaultValues: {
			note: "",
			donationType: "",
			donationAmount: "",
			donationUnit: "",
			mobile: "",
			donationNameCourier: "",
			resourceName: "",
		},
	});

	const onSubmit = async () => {};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
				<FormField
					control={form.control}
					name="mobile"
					render={({ field }) => (
						<FormItem className="flex gap-2 flex-col">
							<FormLabel htmlFor="mobile">Mobile</FormLabel>
							<FormControl>
								<Input
									{...field}
									disabled={form.formState.isSubmitting}
									placeholder="Enter your mobile number"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="note"
					render={({ field }) => (
						<FormItem className="flex gap-2 flex-col">
							<FormLabel htmlFor="note">Note</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									disabled={form.formState.isSubmitting}
									rows={6}
									placeholder="Enter personal note"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
