import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { deleteProject, getProjectDonationInfo } from "@/lib/actions/project.actions";
import { BackButton, DeleteConfirmationBox, ManageProjectButtons } from "@/components/shared";
import { IProject } from "@/lib/models/ProjectModel";

export default async function SinglePageProject({
	userType,
	project,
}: {
	userType: string;
	project: IProject;
}) {
	const dateTime = format(new Date(project.from), "yyyy-MM-dd");
	const deleteProjectWithSlug = deleteProject.bind(null, project.slug);

	const { resources, amount } = await getProjectDonationInfo(project._id);

	return (
		<div className="flex gap-3">
			<div className="w-full p-4">
				<div className="relative h-[380px]">
					<Image
						src={project.image}
						quality={100}
						sizes="100vw"
						className="object-cover rounded-xl"
						fill
						alt="project image"
					/>
					{userType === "admin" && (
						<div className="absolute right-3 items-center top-3 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
							<Link href={`/projects/${project.slug}/update`}>
								<Pencil size={17} className="text-purple-400" />
							</Link>
							<ManageProjectButtons
								project={project}
								completed={project.completed}
								resources={
									resources as [{ totalDonation: number; resourceName: string }]
								}
								amount={amount}
							/>
							<DeleteConfirmationBox action={deleteProjectWithSlug} />
						</div>
					)}
				</div>
				<h2 className="font-bold text-2xl my-3">{project.heading}</h2>

				<div className="my-3 border-b border-[#eff4ff] dark:border-slate-700" />
				<p>
					<strong>Disaster Occurence:</strong> {project.location}
				</p>
				<p>
					<strong>Courier Address:</strong> {project.courierAddress}
				</p>
				<p>Commenced in {dateTime}</p>
				<p>
					<strong>Partner organization: </strong>
					{project.partnerOrganizations ? (
						project.partnerOrganizations
					) : (
						<em>No partner organization</em>
					)}
				</p>

				<div
					className="tiptap-result"
					dangerouslySetInnerHTML={{ __html: project.details }}
				/>
				<div className="mt-6">
					<BackButton />
				</div>
			</div>
		</div>
	);
}
