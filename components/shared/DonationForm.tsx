"use client";

import * as z from "zod";
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DonationValidation } from "@/lib/validations/donation";

export default function DonationForm() {
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

	async function onSubmit(values: z.infer<typeof DonationValidation>) {
		console.log(values);
	}

	function handleChangeHandler(value: string, filedChange: (value: string) => void) {
		filedChange(value);
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
								<FormLabel htmlFor="donationAmount">Donation Amount</FormLabel>
								<FormControl>
									<Input
										type="number"
										min={1}
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
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
