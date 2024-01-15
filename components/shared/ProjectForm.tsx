"use client";

import * as z from "zod";
import { ChangeEvent, useState } from "react";
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
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { DatePickerWithRange, Tiptap } from ".";
import { Plus } from "lucide-react";
import { createProject } from "@/lib/actions/project.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectValidation } from "@/lib/validations/project";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";

export default function ProjectForm() {
	const [key, setKey] = useState(Date.now());
	const { toast } = useToast();
	const pathname = usePathname();
	const router = useRouter();
	const [files, setFiles] = useState<File[]>([]);

	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(2024, 0, 20),
		to: addDays(new Date(2024, 0, 20), 20),
	});

	const { startUpload } = useUploadThing("media");

	const form = useForm({
		resolver: zodResolver(ProjectValidation),
		defaultValues: {
			heading: "",
			from: new Date(2024, 0, 20),
			to: addDays(new Date(2024, 0, 20), 20),
			partnerOrganizations: "",
			description: "",
			details: "",
			image: "",
		},
	});

	async function onSubmit(values: z.infer<typeof ProjectValidation>) {
		// const blobs = values.image;

		// const hasImageChanged = isBase64Image(blobs);

		// if (hasImageChanged) {
		const imgRes = await startUpload(files);

		if (imgRes && imgRes[0].url) {
			values.image = imgRes[0].url;
		}
		// }

		const data = {
			heading: values.heading,
			partnerOrganizations: values.partnerOrganizations,
			from: date?.from,
			to: date?.to,
			description: values.description,
			details: values.details,
			image: values.image,
		};

		// @ts-ignore
		const res = await createProject(data);

		if (res) {
			form.reset();
			setKey(Date.now());
			toast({
				title: "Success: Project",
				description: "Project added successfully",
			});
		}

		if (pathname !== "/projects/create") {
			router.push("/projects");
		}
	}

	function handleImage(e: ChangeEvent<HTMLInputElement>, fieldChange: (value: string) => void) {
		e.preventDefault();

		const fileReader = new FileReader();

		if (e.target.files && e.target.files.length > 0) {
			const file = e.target.files[0];
			setFiles(Array.from(e.target.files));

			if (!file.type.includes("image")) return;

			fileReader.onload = async (event) => {
				const imageDataUrl = event.target?.result?.toString() || "";
				fieldChange(imageDataUrl);
			};

			fileReader.readAsDataURL(file);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
				<FormField
					control={form.control}
					name="heading"
					render={({ field }) => (
						<FormItem className="flex gap-2 flex-col">
							<FormLabel htmlFor="heading">Heading</FormLabel>
							<FormControl>
								<Input
									{...field}
									disabled={form.formState.isSubmitting}
									placeholder="Enter project heading"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="partnerOrganizations"
					render={({ field }) => (
						<FormItem className="flex gap-2 flex-col">
							<FormLabel htmlFor="partnerOrganization">
								Partner Organizations
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									disabled={form.formState.isSubmitting}
									placeholder="Enter partner organizations"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex gap-2 flex-col">
					<Label htmlFor="projectPeriod">Project Period</Label>
					<DatePickerWithRange date={date} setDate={setDate} />
				</div>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem className="flex gap-2 flex-col">
							<FormLabel htmlFor="description">Project Description</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									disabled={form.formState.isSubmitting}
									rows={6}
									placeholder="Enter project description"
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
							<FormItem className="flex gap-2 flex-col">
								<FormLabel htmlFor="image">Project Image</FormLabel>
								<FormControl>
									<Input
										key={key}
										placeholder="Upload a photo"
										onChange={(e) => handleImage(e, field.onChange)}
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
											alt="profile photo"
											fill
											className="rounded-md object-cover"
										/>
									</div>
								)}
							</div>
						</>
					)}
				/>
				<FormField
					control={form.control}
					name="details"
					render={({ field }) => (
						<FormItem className="flex gap-2 flex-col">
							<FormLabel htmlFor="details">Project Details</FormLabel>
							<FormControl>
								<Tiptap
									key={key + 1}
									name={field.name}
									value={field.value}
									onChange={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="pb-5">
					<Button
						disabled={form.formState.isSubmitting}
						className="disabled:cursor-not-allowed disabled:bg-blue-300"
						type="submit"
					>
						<Plus /> Add Project
					</Button>
				</div>
			</form>
		</Form>
	);
}
