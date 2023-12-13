"use client";

import { demoOrganizations } from "@/constants";
import { HeadingSection, OrganizationCard } from "@/components/shared";
import { motion } from "framer-motion";

export default function ShortListedOrganizations() {
	return (
		<div className="shadow rounded-md border">
			<HeadingSection text="Organizations" link="/organizations" linkText="View All" />

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-5 ">
				{demoOrganizations.map((data, index) => (
					<motion.div
						key={data.name}
						initial={{ opacity: 0, y: -100 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 * (index + 1) }}
					>
						<OrganizationCard
							name={data.name}
							username={data.username}
							image={data.image}
							bio={data.bio}
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
}
