"use client";

import { demoNews } from "@/constants";
import { FormalCard } from ".";
import HeadingSection from "./HeadingSection";
import { motion } from "framer-motion";

export default function ShortListedNews() {
	return (
		<div className="shadow rounded-md border">
			<HeadingSection text="News" link="/news" linkText="View All" />

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-5 ">
				{demoNews.map((data, index) => (
					<motion.div
						key={data.heading}
						initial={{ opacity: 0, y: -100 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 * (index + 1) }}
					>
						<FormalCard
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
