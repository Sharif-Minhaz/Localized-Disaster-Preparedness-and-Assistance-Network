"use client";

import { completeProject, resumeProject } from "@/lib/actions/project.actions";
import { ClipboardCheck, ClipboardSignature } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

export default function ManageProjectButtons({
	slug,
	completed,
}: {
	slug: string;
	completed: boolean;
}) {
	const { toast } = useToast();

	const resume = async () => {
		const { success } = await resumeProject(slug);
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

	const complete = async () => {
		const { success } = await completeProject(slug);
		if (success) {
			return toast({
				title: "Success: Project",
				description: "Project completion success",
				action: <ToastAction altText="OK">OK</ToastAction>,
			});
		}
		toast({
			variant: "destructive",
			title: "Failed: Project",
			description: "Project completion failed",
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
				<ClipboardSignature
					onClick={complete}
					size={18}
					className="text-green-400 cursor-pointer"
				/>
			)}
		</>
	);
}
