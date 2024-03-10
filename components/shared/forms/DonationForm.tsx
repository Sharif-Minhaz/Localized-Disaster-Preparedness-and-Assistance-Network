"use client";

import * as z from "zod";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DonationValidation } from "@/lib/validations/donation";
import { addDonation, checkoutDonation } from "@/lib/actions/donation.actions";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/nextjs";
import { toast } from "../../ui/use-toast";
import { ToastAction } from "../../ui/toast";
import { IProject } from "@/lib/models/ProjectModel";

export type Donation = {
	mobile: string;
	note?: string;
	donationType: string;
	donationAmount?: string;
	donationUnit?: string;
	shipperName?: string;
	resourceName?: string;
};

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function DonationForm({ project }: { project: IProject }) {
	const { user } = useUser();
	const userId = user?.publicMetadata?.userId || "";

	const form = useForm({
		resolver: zodResolver(DonationValidation),
		defaultValues: {
			mobile: "",
			note: "",
			donationType: "",
			donationAmount: "",
			donationUnit: "",
			shipperName: "",
			resourceName: "",
		},
	});

	useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);
		if (query.get("success")) {
			console.log("Donation placed! You will receive an email confirmation.");
		}

		if (query.get("canceled")) {
			console.log("Donation canceled, checkout when you’re ready.");
		}
	}, []);

	async function onSubmit(values: z.infer<typeof DonationValidation>) {
		if (values.donationType === "money") {
			await checkoutDonation(values, userId.toString(), project);
		} else {
			// execute when user select resource type
			const res = await addDonation(values, userId.toString(), project);
			if (res.status === "OK") {
				// reset the whole form after submitting
				form.reset();
				return toast({
					title: "Success: Donation",
					description: "Resource donated successfully",
					action: <ToastAction altText="OK">OK</ToastAction>,
				});
			}
			// provide error toast when donation failed
			toast({
				title: "Failed: Donation",
				description: "Resource donation failed, try again later",
				action: <ToastAction altText="OK">OK</ToastAction>,
			});
		}
	}

	function handleChangeHandler(value: string, filedChange: (value: string) => void) {
		// changing the donationType
		filedChange(value);
		// resetting some partial field when donationType is changing
		["donationAmount", "donationUnit", "shipperName", "resourceName"].forEach((field: any) => {
			form.resetField(field);
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
				<FormField
					control={form.control}
					name="mobile"
					render={({ field }) => (
						<FormItem className="flex gap-1 flex-col">
							<FormLabel htmlFor="mobile">Mobile Number</FormLabel>
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
						<FormItem className="flex gap-1 flex-col">
							<FormLabel htmlFor="note">Donation Note (optional)</FormLabel>
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
				<FormField
					control={form.control}
					name="donationType"
					render={({ field }) => (
						<FormItem className="flex gap-1 flex-col">
							<FormLabel htmlFor="donationType">Donation Type</FormLabel>
							<FormControl>
								<Select
									disabled={form.formState.isSubmitting}
									onValueChange={(value) =>
										handleChangeHandler(value, field.onChange)
									}
									defaultValue={field.value}
								>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Select type" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="money">Money</SelectItem>
										<SelectItem value="resource">Resource</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{form.watch("donationType") === "money" && (
					<FormField
						control={form.control}
						name="donationAmount"
						render={({ field }) => (
							<FormItem className="flex gap-1 flex-col">
								<FormLabel htmlFor="donationAmount">
									Donation Amount (BDT)
								</FormLabel>
								<FormControl>
									<Input
										type="number"
										min={100}
										{...field}
										disabled={form.formState.isSubmitting}
										placeholder="Enter your donation amount"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				)}
				{form.watch("donationType") === "resource" && (
					<>
						<FormField
							control={form.control}
							name="resourceName"
							render={({ field }) => (
								<FormItem className="flex gap-1 flex-col">
									<FormLabel htmlFor="resourceName">Resource Name</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled={form.formState.isSubmitting}
											placeholder="Enter resource name"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="donationUnit"
							render={({ field }) => (
								<FormItem className="flex gap-1 flex-col">
									<FormLabel htmlFor="donationUnit">Donation Unit</FormLabel>
									<FormControl>
										<Input
											type="number"
											min={1}
											{...field}
											disabled={form.formState.isSubmitting}
											placeholder="Enter your donation unit"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="shipperName"
							render={({ field }) => (
								<FormItem className="flex gap-1 flex-col">
									<FormLabel htmlFor="shipperName">Shipper&apos;s Name</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled={form.formState.isSubmitting}
											placeholder="Enter your shipping name"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</>
				)}
				<Button
					className="disabled:cursor-not-allowed"
					disabled={form.formState.isSubmitting}
					type="submit"
				>
					Submit
				</Button>
			</form>
		</Form>
	);
}
