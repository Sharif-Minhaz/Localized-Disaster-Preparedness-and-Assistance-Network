"use client";

import { demoProjects } from "@/constants";
import { HeadingSection, FormalCard } from "@/components/shared";
import { motion } from "framer-motion";
import { ProjectProps } from "./ProjectsList";

export default function ShortListedProjects({ projects }: ProjectProps) {
	return (
		<div className="shadow rounded-md border">
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
						<FormalCard
							heading={data.heading}
							image={data.image}
							description={data.description}
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
}
