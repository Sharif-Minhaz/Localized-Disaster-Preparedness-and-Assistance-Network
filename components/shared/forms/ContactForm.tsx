"use client";

import * as z from "zod";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "../../ui/textarea";
import { Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "../../ui/use-toast";
import { ToastAction } from "../../ui/toast";
import { BackButton } from "..";
import { ContactValidation } from "@/lib/validations/contact";
import { receiveEmailFromUser } from "@/lib/utils";

export default function ContactForm() {
	const { toast } = useToast();

	const form = useForm({
		resolver: zodResolver(ContactValidation),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			contact: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof ContactValidation>) {
		const res = await receiveEmailFromUser(values);

		if (res?.success) {
			form.reset();
			toast({
				title: "Sent: Email",
				description: "We will be get in touch ASAP",
				action: <ToastAction altText="OK">OK</ToastAction>,
			});
		} else {
			toast({
				variant: "destructive",
				title: "Sent: failure",
				description: `Reason: ${res?.err}`,
			});
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
				<div className="flex gap-3">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormControl>
									<Input
										{...field}
										disabled={form.formState.isSubmitting}
										placeholder="FirstName"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormControl>
									<Input
										{...field}
										disabled={form.formState.isSubmitting}
										placeholder="LastName"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="flex gap-3">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormControl>
									<Input
										{...field}
										type="email"
										disabled={form.formState.isSubmitting}
										placeholder="Email"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="contact"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormControl>
									<Input
										{...field}
										type="tel"
										disabled={form.formState.isSubmitting}
										placeholder="Contact Number"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									{...field}
									disabled={form.formState.isSubmitting}
									rows={6}
									placeholder="Your message here..."
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="space-x-3">
					<Button disabled={form.formState.isSubmitting} type="submit">
						<Send size={17} className="mr-2" /> Send
					</Button>
					<BackButton />
				</div>
			</form>
		</Form>
	);
}
