"use client";

import { motion } from "framer-motion";
import { BookOpenText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Projects {
	_id: string;
	slug: string;
	partnerOrganizations: string;
	image: string;
	projectPeriod: string;
	heading: string;
	description: string;
	details: string;
}

interface Props {
	projects: Projects[];
}

export default function ProjectsList({ projects }: Props) {
	return (
		<div className="sm:p-5 p-4 flex flex-col gap-4 sm:gap-5">
			{projects.map((project) => (
				<motion.article
					key={project._id}
					className="p-3 flex gap-4 flex-col sm:flex-row shadow-lg rounded-lg"
				>
					<Image
						src={project.image}
						className="w-full sm:w-[300px] rounded-sm"
						alt={project.heading}
					/>
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
