"use client";

import { HeadingSection, ProjectCard } from "@/components/shared";
import { IProject } from "@/lib/models/ProjectModel";
import { motion } from "framer-motion";

interface ProjectProps {
	userType: string;
	projects: IProject[];
}

export default function ShortListedProjects({ userType, projects }: ProjectProps) {
	return (
		<div className="dark:shadow-gray-900 shadow-md rounded-xl border">
			<HeadingSection text="Projects" link="/projects" linkText="View All" />

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-5 ">
				{[...projects].slice(0, 3).map((data, index) => (
					<motion.div
						key={data.heading}
						initial={{ opacity: 0, y: -100 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 * (index + 1) }}
					>
						<ProjectCard
							userType={userType}
							heading={data.heading}
							image={data.image}
							description={data.description}
							slug={data.slug}
							completed={data.completed}
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
}
