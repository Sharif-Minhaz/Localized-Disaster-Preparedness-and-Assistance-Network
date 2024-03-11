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
import { ImageUp } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleImage, isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useToast } from "../../ui/use-toast";
import { ToastAction } from "../../ui/toast";
import { ImageGalleryValidation } from "@/lib/validations/imageGallery";
import { addGalleyImage } from "@/lib/actions/gallery.actions";
import { BackButton } from "..";

export default function ImageGalleryForm({ userId }: { userId: string }) {
	const [key, setKey] = useState(Date.now());
	const { toast } = useToast();
	const [files, setFiles] = useState<File[]>([]);

	const { startUpload } = useUploadThing("media");

	const form = useForm({
		resolver: zodResolver(ImageGalleryValidation),
		defaultValues: {
			heading: "",
			description: "",
			image: "",
		},
	});

	async function onSubmit(values: z.infer<typeof ImageGalleryValidation>) {
		const blobs = values.image;

		const hasImageChanged = isBase64Image(blobs);

		if (hasImageChanged) {
			const imgRes = await startUpload(files);

			if (imgRes && imgRes[0].url) {
				values.image = imgRes[0].url;
			}
		}

		const res = await addGalleyImage(userId, {
			heading: values.heading,
			description: values.description,
			image: values.image,
		});

		if (res.success) {
			form.reset();
			setKey(Date.now());
			toast({
				title: "Submit: Image",
				description: "New image has added to the gallery",
				action: <ToastAction altText="OK">OK</ToastAction>,
			});
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
				<FormField
					control={form.control}
					name="heading"
					render={({ field }) => (
						<FormItem className="flex gap-1 flex-col">
							<FormLabel htmlFor="heading">Heading</FormLabel>
							<FormControl>
								<Input
									{...field}
									disabled={form.formState.isSubmitting}
									placeholder="Enter image heading"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem className="flex gap-1 flex-col">
							<FormLabel htmlFor="description">Image context</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									disabled={form.formState.isSubmitting}
									rows={6}
									placeholder="Enter image context"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="image"
					render={({ field }) => (
						<>
							<FormItem className="flex gap-1 flex-col">
								<FormLabel htmlFor="documentImg">Upload image (2:1)</FormLabel>
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
											alt="Gallery photo"
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
				<div className="pb-5 space-x-3">
					<Button disabled={form.formState.isSubmitting} type="submit">
						<ImageUp size={17} className="mr-2" /> Upload
					</Button>
					<BackButton />
				</div>
			</form>
		</Form>
	);
}
