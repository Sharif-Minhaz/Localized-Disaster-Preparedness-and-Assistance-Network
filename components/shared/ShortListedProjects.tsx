"use client";

import { demoProjects } from "@/constants";
import { FormalCard } from ".";
import HeadingSection from "./HeadingSection";
import { motion } from "framer-motion";

export default function ShortListedProjects() {
	return (
		<div className="shadow rounded-md border">
			<HeadingSection text="Projects" link="/projects" linkText="View All" />

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-5 ">
				{demoProjects.map((data, index) => (
					<motion.div
						key={data.heading}
						initial={{ opacity: 0, y: -100 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 * (index + 1) }}
					>
						<FormalCard
							key={data.heading}
							heading={data.heading}
							image={data.img}
							description={data.description}
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
}
