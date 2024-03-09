"use client";

import z from "zod";
import Image from "next/image";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { CommentValidation } from "@/lib/validations/comment";
import { addCommentToPost } from "@/lib/actions/post.actions";

export default function CommentForm({
	userId,
	postId,
	userImg,
	communitySlug,
}: {
	userId: string;
	postId: string;
	userImg: string;
	communitySlug: string;
}) {
	const form = useForm({
		resolver: zodResolver(CommentValidation),
		defaultValues: {
			comment: "",
		},
	});

	async function onSubmit(values: z.infer<typeof CommentValidation>) {
		const res = await addCommentToPost({
			commentedBy: userId,
			comment: values.comment,
			postId,
			communitySlug,
		});

		if (res) {
			form.reset();
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
										placeholder="Write a comment"
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
