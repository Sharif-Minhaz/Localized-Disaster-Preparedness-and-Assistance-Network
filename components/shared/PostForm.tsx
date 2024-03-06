"use client";

import * as z from "zod";
import { useState } from "react";
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
import { Textarea } from "../ui/textarea";
import { CheckCircle, Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleImage, isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { IPost } from "@/lib/models/PostModel";
import { createPost, updatePostInfo } from "@/lib/actions/post.actions";
import { PostValidation } from "@/lib/validations/post";

export default function PostForm({
	userId,
	communityId,
	communitySlug,
	post,
	update,
}: {
	userId: string;
	communityId: string;
	communitySlug: string;
	post?: IPost;
	update?: boolean;
}) {
	const [key] = useState(Date.now());
	const { toast } = useToast();
	const router = useRouter();
	const [files, setFiles] = useState<File[]>([]);

	const { startUpload } = useUploadThing("media");

	const form = useForm({
		resolver: zodResolver(PostValidation),
		defaultValues: {
			description: post?.description || "",
			image: post?.image || "",
		},
	});

	async function onSubmit(values: z.infer<typeof PostValidation>) {
		const blobs = values.image;

		if (blobs) {
			const hasImageChanged = isBase64Image(blobs);

			if (hasImageChanged) {
				const imgRes = await startUpload(files);

				values.image = imgRes && imgRes[0].url ? imgRes[0].url : "";
			}
		}

		if (update && post) {
			const res = await updatePostInfo({
				description: values.description,
				image: values.image,
				postId: post._id,
			});
			if (res) {
				toast({
					title: "Success: Community",
					description: "Community updated successfully",
					action: <ToastAction altText="OK">OK</ToastAction>,
				});
				return router.push(`/communities/${communitySlug}/post/${post._id}`);
			}

			return toast({
				variant: "destructive",
				title: "Failed: Community update",
				description: "Community update failed",
				action: <ToastAction altText="close">Close</ToastAction>,
			});
		}

		await createPost({
			communityId,
			description: values.description,
			image: values.image,
			createdBy: userId,
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem className="flex gap-1 flex-col">
							<FormLabel htmlFor="bio">Post Description</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									disabled={form.formState.isSubmitting}
									rows={6}
									placeholder="Enter post description"
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
								<FormLabel htmlFor="image">Post image</FormLabel>
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
						{update ? (
							<>
								<CheckCircle size={17} className="mr-2" /> Update Post
							</>
						) : (
							<>
								<Plus size={17} className="mr-2" /> Add Post
							</>
						)}
					</Button>
				</div>
			</form>
		</Form>
	);
}
