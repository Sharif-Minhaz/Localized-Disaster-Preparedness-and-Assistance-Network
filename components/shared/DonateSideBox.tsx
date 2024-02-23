import { DonationForm } from "@/components/shared";
import { Project } from "./ProjectsList";

export default function DonateSideBox({ project }: { project: Project }) {
	return (
		<div>
			<h2 className="text-[20px] uppercase">
				Donation Form {project.completed && "(closed)"}
			</h2>
			<div className="border-b border-slate-100 dark:border-slate-700 my-3.5" />
			{project.completed ? (
				<p className="text-[14px] text-gray-400 dark:text-slate-200">
					This project&apos;s donation form is currently closed and not accepting donation
					anymore.
				</p>
			) : (
				<DonationForm project={project} />
			)}
		</div>
	);
}
