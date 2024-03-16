"use client";

import { resumeProject } from "@/lib/actions/project.actions";
import { ClipboardCheck, ClipboardSignature } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectCompletionForm } from ".";
import { IProject } from "@/lib/models/ProjectModel";

export default function ManageProjectButtons({
	project,
	completed,
	resources,
	amount,
}: {
	project: IProject;
	completed: boolean;
	resources: [{ totalDonation: number; resourceName: string }];
	amount: number;
}) {
	const { toast } = useToast();

	const resume = async () => {
		const { success } = await resumeProject(project.slug);
		if (success) {
			return toast({
				title: "Success: Project",
				description: "Project resumed successfully",
				action: <ToastAction altText="OK">OK</ToastAction>,
			});
		}
		toast({
			variant: "destructive",
			title: "Failed: Project",
			description: "Project resume failure",
			action: <ToastAction altText="OK">OK</ToastAction>,
		});
	};

	return (
		<>
			{completed ? (
				<ClipboardCheck
					onClick={resume}
					size={18}
					className="text-blue-400 cursor-pointer"
				/>
			) : (
				<Dialog>
					<DialogTrigger asChild>
						<ClipboardSignature size={18} className="text-green-400 cursor-pointer" />
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Complete Project</DialogTitle>
							<DialogDescription>
								Click generate when you&apos;re done.
							</DialogDescription>
						</DialogHeader>
						<ProjectCompletionForm
							project={project}
							resources={resources}
							amount={amount}
						/>
					</DialogContent>
				</Dialog>
			)}
		</>
	);
}
