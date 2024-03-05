"use client";

import z from "zod";
import Image from "next/image";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastAction } from "../ui/toast";
import { toast } from "../ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { CommentValidation } from "@/lib/validations/comment";
import { addCommentToPost } from "@/lib/actions/post.actions";

export default function CommentForm({ userId, userImg }: { userId: string; userImg: string }) {
	const form = useForm({
		resolver: zodResolver(CommentValidation),
		defaultValues: {
			comment: "",
		},
	});

	async function onSubmit(values: z.infer<typeof CommentValidation>) {
		const res = await addCommentToPost({ comment: values.comment });

		if (res) {
			form.reset();
			toast({
				title: "Success: Comment",
				description: "Comment added successfully",
				action: <ToastAction altText="OK">OK</ToastAction>,
			});
		}
	}

	return (
		<div className="flex gap-3">
			<div>
				<Image
					src={userImg}
					alt="author-image"
					className="rounded-full"
					height={41}
					width={41}
				/>
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full">
					<FormField
						control={form.control}
						name="comment"
						render={({ field }) => (
							<FormItem className="flex flex-col gap-1 w-full">
								<FormControl>
									<Input
										{...field}
										disabled={form.formState.isSubmitting}
										placeholder="Enter comment"
										className="w-full"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</div>
	);
}
