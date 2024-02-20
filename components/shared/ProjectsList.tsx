"use client";

import { motion } from "framer-motion";
import { BookOpenText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface Project {
	_id: string;
	slug: string;
	partnerOrganizations: string;
	image: string;
	from: string;
	to: string;
	heading: string;
	description: string;
	details: string;
}

export interface ProjectProps {
	projects: Project[];
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
					className="p-3 w-full border flex gap-4 sm:flex-row relative flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg"
				>
					<div id="project-img-wrapper">
						<div className="relative flex-grow w-full sm:w-[300px] h-[250px] sm:h-[175px]">
							<Image
								src={project.image}
								className="rounded-md object-cover"
								alt={project.heading}
								fill
								quality={100}
								sizes="(max-width: 500px) 100vw"
							/>
						</div>
					</div>
					<div>
						<h2 className="text-[20px] font-semibold mb-2 leading-[1.2]">
							{project.heading}
						</h2>
						<hr />
						<p className="line-clamp-6 text-sm mt-1.5">{project.description}</p>
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
