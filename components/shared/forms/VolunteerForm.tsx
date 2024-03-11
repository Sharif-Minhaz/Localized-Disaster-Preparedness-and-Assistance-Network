"use client";

import * as z from "zod";
import { useState } from "react";
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
import { Textarea } from "../../ui/textarea";
import { SendHorizonal } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleImage, isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useToast } from "../../ui/use-toast";
import { ToastAction } from "../../ui/toast";
import { ApplicationValidation } from "@/lib/validations/application";
import { createApplication } from "@/lib/actions/application.actions";
import { useUser } from "@clerk/nextjs";

export default function VolunteerForm() {
	const { user } = useUser();
	const [key, setKey] = useState(Date.now());
	const { toast } = useToast();
	const [files, setFiles] = useState<File[]>([]);

	const { startUpload } = useUploadThing("media");

	const form = useForm({
		resolver: zodResolver(ApplicationValidation),
		defaultValues: {
			name: user?.username || "",
			why: "",
			documentImg: "",
		},
	});

	async function onSubmit(values: z.infer<typeof ApplicationValidation>) {
		const blobs = values.documentImg;

		const hasImageChanged = isBase64Image(blobs);

		if (hasImageChanged) {
			const imgRes = await startUpload(files);

			if (imgRes && imgRes[0].url) {
				values.documentImg = imgRes[0].url;
			}
		}

		const res = await createApplication({
			name: values.name,
			why: values.why,
			documentImg: values.documentImg,
			createdBy: user?.id || "",
		});

		if (res) {
			form.reset();
			setKey(Date.now());
			toast({
				title: "Submit: Application",
				description: "You will get notification about admin action with your application",
				action: <ToastAction altText="OK">OK</ToastAction>,
			});
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="flex gap-1 flex-col">
							<FormLabel htmlFor="name">Name</FormLabel>
							<FormControl>
								<Input
									{...field}
									disabled={form.formState.isSubmitting}
									placeholder="Enter your name"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="why"
					render={({ field }) => (
						<FormItem className="flex gap-1 flex-col">
							<FormLabel htmlFor="why">Explain your motive</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									disabled={form.formState.isSubmitting}
									rows={6}
									placeholder="Enter your motive"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="documentImg"
					render={({ field }) => (
						<>
							<FormItem className="flex gap-1 flex-col">
								<FormLabel htmlFor="documentImg">
									Provide any identity document (NID or BRC)
								</FormLabel>
								<FormControl>
									<Input
										key={key}
										placeholder="Upload a photo"
										onChange={(e) => handleImage(e, field.onChange, setFiles)}
										disabled={form.formState.isSubmitting}
										type="file"
										accept="image/*"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
							<div className="-mt-3">
								{field.value && (
									<div className="w-[200px] h-[115px] relative border rounded-md">
										<Image
											src={field.value}
											priority
											alt="community photo"
											quality={100}
											sizes="100vw"
											fill
											className="rounded-md object-cover"
										/>
									</div>
								)}
							</div>
						</>
					)}
				/>
				<div className="pb-5">
					<Button disabled={form.formState.isSubmitting} type="submit">
						<SendHorizonal size={17} className="mr-2" /> Apply
					</Button>
				</div>
			</form>
		</Form>
	);
}
