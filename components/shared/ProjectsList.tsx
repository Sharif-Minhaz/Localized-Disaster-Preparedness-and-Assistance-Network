"use client";

import { motion } from "framer-motion";
import { BookOpenText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { deleteProject } from "@/lib/actions/project.actions";
import { DeleteProjectCom } from "@/components/shared";
import { IProject } from "@/lib/models/ProjectModel";

export interface ProjectProps {
	projects: IProject[];
	isNext: boolean;
}

export default function ProjectsList({ projects, isNext }: ProjectProps) {
	if (!projects.length) {
		return <div className="sm:p-5 p-4">No project found.</div>;
	}

	return (
		<div className="w-full sm:p-5 p-4 flex flex-col gap-4 sm:gap-5">
			{projects.map((project) => (
				<motion.article
					key={project._id}
					className="p-3 w-full border flex gap-4 sm:flex-row relative flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg"
				>
					<div id="project-img-wrapper">
						<div className="relative flex-grow w-full sm:w-[300px] h-[290px] sm:h-[175px]">
							<Image
								src={project.image}
								className="rounded-xl object-cover"
								alt={project.heading}
								fill
								quality={100}
								sizes="(max-width: 500px) 100vw"
							/>
							<div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
								<Link href={`/projects/${project.slug}/update`}>
									<Pencil className="text-purple-400 w-5 h-5" />
								</Link>
								<DeleteProjectCom action={deleteProject.bind(null, project.slug)} />
							</div>
						</div>
					</div>
					<div>
						<h2 className="text-[20px] font-semibold line-clamp-1 mb-2 leading-[1.2]">
							{project.heading}
						</h2>
						<div className="my-3">
							{!project.completed ? (
								<div className="flex gap-2">
									<span className="text-[12px] font-semibold leading-[20px] w-min rounded-full bg-green-100 px-4 py-1 text-green-500">
										OPEN
									</span>
									<span className="text-[12px] font-semibold leading-[20px] w-min rounded-full bg-blue-100 px-4 py-1 text-blue-500 line-clamp-1">
										DONATABLE
									</span>
								</div>
							) : (
								<span className="text-[12px] font-semibold leading-[20px] w-min rounded-full bg-gray-200 px-4 py-1 text-gray-500 line-clamp-1">
									CLOSED
								</span>
							)}
						</div>
						<p className="line-clamp-3 text-sm mt-1.5">{project.description}</p>
						<div className="mt-3">
							<Link
								href={`/projects/${project.slug}`}
								className="text-green-600 flex items-center gap-2"
							>
								<BookOpenText size={18} /> Read More
							</Link>
						</div>
					</div>
				</motion.article>
			))}
		</div>
	);
}
