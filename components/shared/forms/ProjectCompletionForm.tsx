"use client";

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
import { CalendarCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "../../ui/use-toast";
import { ToastAction } from "../../ui/toast";
import { completeProject, generateAuditReport } from "@/lib/actions/project.actions";
import { IProject } from "@/lib/models/ProjectModel";

interface IProjectCompletionProps {
	resources: [{ totalDonation: number; resourceName: string }];
	amount: number;
	project: IProject;
}

export default function ProjectCompletionForm({
	resources,
	amount,
	project,
}: IProjectCompletionProps) {
	const { toast } = useToast();
	const convertedDonations = resources.reduce(
		(acc, { totalDonation, resourceName }) => ({ ...acc, [resourceName]: totalDonation }),
		{}
	);
	const form = useForm({ defaultValues: { donatedAmount: 0, ...convertedDonations } });

	async function onSubmit(values: any) {
		await generateAuditReport({ project, values });
		// const { success } = await completeProject(slug);
		// if (success) {
		// 	return toast({
		// 		title: "Success: Project",
		// 		description: "Project completion success",
		// 		action: <ToastAction altText="OK">OK</ToastAction>,
		// 	});
		// }
		// toast({
		// 	variant: "destructive",
		// 	title: "Failed: Project",
		// 	description: "Project completion failed",
		// 	action: <ToastAction altText="OK">OK</ToastAction>,
		// });
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
				<FormField
					control={form.control}
					name="donatedAmount"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel htmlFor="donatedAmount">
								Donation collection ({new Intl.NumberFormat("en-IN").format(amount)}{" "}
								BDT)
							</FormLabel>
							<FormControl>
								<Input
									type="number"
									max={amount}
									required
									{...field}
									disabled={form.formState.isSubmitting}
									placeholder="Donated amount"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<p>---Resources list---</p>
				{resources.map((resource, index) => (
					<FormField
						key={index}
						control={form.control}
						//@ts-ignore
						name={resource.resourceName}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel htmlFor={resource.resourceName}>
									{resource.resourceName} ({resource.totalDonation}x)
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										required
										type="number"
										max={resource.totalDonation}
										disabled={form.formState.isSubmitting}
										placeholder={`Donated ${resource.resourceName}`}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}

				<div className="space-x-3">
					<Button disabled={form.formState.isSubmitting} type="submit">
						<CalendarCheck size={17} className="mr-2" /> Complete
					</Button>
				</div>
			</form>
		</Form>
	);
}
