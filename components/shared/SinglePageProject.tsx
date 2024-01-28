import Image from "next/image";
import { Project } from "./ProjectsList";
import { format } from "date-fns";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { deleteProject } from "@/lib/actions/project.actions";
import DeleteProjectCom from "./DeleteProjectCom";

export default function SinglePageProject({ project }: { project: Project }) {
	const dateTime = format(new Date(project.from), "yyyy-MM-dd");
	const deleteProjectWithSlug = deleteProject.bind(null, project.slug);

	return (
		<div className="flex gap-3">
			<div className="w-full p-4">
				<div className="relative h-[380px]">
					<Image
						src={project.image}
						quality={100}
						sizes="100vw"
						className="object-cover"
						fill
						alt="project image"
					/>
				</div>
				<h2 className="font-bold text-2xl">{project.heading}</h2>
				<div className="flex gap-2">
					<Link href={`/projects/${project.slug}/update`}>
						<Pencil />
					</Link>
					<DeleteProjectCom action={deleteProjectWithSlug} />
				</div>
				<p>Commenced in {dateTime}</p>
				<p>
					<strong>Partner organization: </strong>
					{project.partnerOrganizations}
				</p>

				<div
					className="tiptap-result"
					dangerouslySetInnerHTML={{ __html: project.details }}
				/>
			</div>
		</div>
	);
}
