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
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { BackButton, DatePickerWithRange, Tiptap } from "..";
import { CheckCircle, Plus } from "lucide-react";
import { createProject, updateProject } from "@/lib/actions/project.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectValidation } from "@/lib/validations/project";
import { handleImage, isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useToast } from "../../ui/use-toast";
import { ToastAction } from "../../ui/toast";
import { IProject } from "@/lib/models/ProjectModel";

export default function ProjectForm({
	adminId,
	project,
	update,
}: {
	adminId?: string;
	project?: IProject;
	update?: boolean;
}) {
	const [key, setKey] = useState(Date.now());
	const { toast } = useToast();
	const router = useRouter();
	const [files, setFiles] = useState<File[]>([]);

	const projectStartDate = project?.from ? new Date(project.from) : new Date(2024, 0, 20);
	const projectEndDate = project?.to ? new Date(project.to) : addDays(new Date(2024, 0, 20), 20);

	const [date, setDate] = useState<DateRange | undefined>({
		from: projectStartDate,
		to: projectEndDate,
	});

	const { startUpload } = useUploadThing("media");

	const form = useForm({
		resolver: zodResolver(ProjectValidation),
		defaultValues: {
			heading: project?.heading || "",
			from: projectStartDate,
			to: projectEndDate,
			partnerOrganizations: project?.partnerOrganizations || "",
			description: project?.description || "",
			details: project?.details || "",
			location: project?.location || "",
			courierAddress: project?.courierAddress || "",
			image: project?.image || "",
		},
	});

	async function onSubmit(values: z.infer<typeof ProjectValidation>) {
		const blobs = values.image;

		const hasImageChanged = isBase64Image(blobs);

		if (hasImageChanged) {
			const imgRes = await startUpload(files);

			if (imgRes && imgRes[0].url) {
				values.image = imgRes[0].url;
			}
		}

		const data = {
			createdBy: adminId,
			heading: values.heading,
			partnerOrganizations: values.partnerOrganizations,
			from: date?.from,
			to: date?.to,
			description: values.description,
			details: values.details,
			location: values.location,
			courierAddress: values.courierAddress,
			image: values.image,
			slug: project?.slug,
		};

		if (update) {
			// update project
			const res = await updateProject(data);
			if (res) {
				toast({
					title: "Success: Project",
					description: "Project updated successfully",
					action: <ToastAction altText="OK">OK</ToastAction>,
				});
				return router.push("/projects");
			}

			return toast({
				variant: "destructive",
				title: "Failed: Project update",
				description: "Project update failed",
				action: <ToastAction altText="close">Close</ToastAction>,
			});
		}

		// create a new project
		const res = await createProject(data);

		if (res) {
			form.reset();
			setKey(Date.now());
			toast({
				title: "Success: Project",
				description: "Project added successfully",
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
						<FormItem className="flex gap-1 flex-col">
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
					name="location"
					render={({ field }) => (
						<FormItem className="flex gap-1 flex-col">
							<FormLabel htmlFor="location">Disaster location</FormLabel>
							<FormControl>
								<Input
									{...field}
									disabled={form.formState.isSubmitting}
									placeholder="Enter disaster location"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="courierAddress"
					render={({ field }) => (
						<FormItem className="flex gap-1 flex-col">
							<FormLabel htmlFor="courierAddress">Courier Address</FormLabel>
							<FormControl>
								<Input
									{...field}
									disabled={form.formState.isSubmitting}
									placeholder="Enter courier address"
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
							<FormItem className="flex gap-1 flex-col">
								<FormLabel htmlFor="image">Project Image</FormLabel>
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
											alt="profile photo"
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
				<FormField
					control={form.control}
					name="details"
					render={({ field }) => (
						<FormItem className="flex gap-1 flex-col">
							<FormLabel htmlFor="details">Project Details</FormLabel>
							<FormControl>
								<Tiptap
									key={key}
									name={field.name}
									value={field.value}
									onChange={field.onChange}
									editable={!form.formState.isSubmitting}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="pb-5 space-x-3">
					<Button disabled={form.formState.isSubmitting} type="submit">
						{update ? (
							<>
								<CheckCircle size={17} className="mr-2" /> Update Project
							</>
						) : (
							<>
								<Plus size={17} className="mr-2" /> Add Project
							</>
						)}
					</Button>
					<BackButton />
				</div>
			</form>
		</Form>
	);
}
