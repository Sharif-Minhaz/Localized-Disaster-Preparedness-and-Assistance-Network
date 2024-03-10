"use client";

import * as z from "zod";
import { ChangeEvent, useState } from "react";
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
import { CheckCircle, Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleImage, isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useToast } from "../../ui/use-toast";
import { ToastAction } from "../../ui/toast";
import { ICommunity } from "@/lib/models/CommunityModel";
import { CommunityValidation } from "@/lib/validations/community";
import { createCommunity, updateCommunityInfo } from "@/lib/actions/community.actions";

export default function CommunityForm({
	adminId,
	community,
	update,
}: {
	adminId: string;
	community?: ICommunity;
	update?: boolean;
}) {
	const [key, setKey] = useState(Date.now());
	const { toast } = useToast();
	const router = useRouter();
	const [files, setFiles] = useState<File[]>([]);

	const { startUpload } = useUploadThing("media");

	const form = useForm({
		resolver: zodResolver(CommunityValidation),
		defaultValues: {
			name: community?.name || "",
			bio: community?.bio || "",
			image: community?.image || "",
		},
	});

	async function onSubmit(values: z.infer<typeof CommunityValidation>) {
		const blobs = values.image;

		const hasImageChanged = isBase64Image(blobs);

		if (hasImageChanged) {
			const imgRes = await startUpload(files);

			if (imgRes && imgRes[0].url) {
				values.image = imgRes[0].url;
			}
		}

		if (update && community) {
			const res = await updateCommunityInfo({
				name: values.name,
				bio: values.bio,
				image: values.image,
				communityId: community._id,
			});
			if (res) {
				toast({
					title: "Success: Community",
					description: "Community updated successfully",
					action: <ToastAction altText="OK">OK</ToastAction>,
				});
				return router.push("/communities");
			}

			return toast({
				variant: "destructive",
				title: "Failed: Community update",
				description: "Community update failed",
				action: <ToastAction altText="close">Close</ToastAction>,
			});
		}

		const res = await createCommunity({
			name: values.name,
			bio: values.bio,
			image: values.image,
			createdBy: adminId,
		});

		if (res) {
			form.reset();
			setKey(Date.now());
			toast({
				title: "Success: Community",
				description: "Community added successfully",
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
									placeholder="Enter community name"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="bio"
					render={({ field }) => (
						<FormItem className="flex gap-1 flex-col">
							<FormLabel htmlFor="bio">Community Bio</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									disabled={form.formState.isSubmitting}
									rows={6}
									placeholder="Enter community bio"
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
								<FormLabel htmlFor="image">Community Profile Picture</FormLabel>
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
									<div className="w-[115px] h-[115px] relative border rounded-md">
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
						{update ? (
							<>
								<CheckCircle size={17} className="mr-2" /> Update Community
							</>
						) : (
							<>
								<Plus size={17} className="mr-2" /> Add Community
							</>
						)}
					</Button>
				</div>
			</form>
		</Form>
	);
}
