import { DonationForm } from "@/components/shared";
import { IProject } from "@/lib/models/ProjectModel";
import { Info } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function DonateSideBox({ project }: { project: IProject }) {
	return (
		<div>
			<h2 className="text-[20px] uppercase">
				Donation Form {project.completed && "(closed)"}
			</h2>
			<div className="border-b border-slate-100 dark:border-slate-700 my-3.5" />
			{project.completed ? (
				<div>
					<div className="flex gap-2 mb-3 text-gray-500 dark:text-slate-200">
						<Info size={26} />{" "}
						<span className="text-[14px]">
							This project&apos;s donation form is currently closed and not accepting
							donation anymore.
						</span>
					</div>
					<div className="flex gap-2 mb-6 text-gray-500 dark:text-slate-200">
						<Info size={18} />{" "}
						<span className="text-[14px]">
							Visit Audit report page to view the overall project summary.
						</span>
					</div>
					<Link href="/audit-reports">
						<Button variant="secondary">Audit Reports</Button>
					</Link>
				</div>
			) : (
				<DonationForm project={project} />
			)}
		</div>
	);
}
