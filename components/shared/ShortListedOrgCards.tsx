"use client";

import { motion } from "framer-motion";
import { OrganizationCard } from ".";
import { ICommunity } from "@/lib/models/CommunityModel";

interface ShortListedOrgCardsProps {
	communities: ICommunity[];
	isNext: boolean;
}

export default function ShortListedOrgCards({ communities, isNext }: ShortListedOrgCardsProps) {
	if (!communities.length) {
		return <div className="sm:p-5 p-4">No community found.</div>;
	}
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-5 ">
			{communities.map((data, index) => (
				<motion.div
					key={data.name}
					initial={{ opacity: 0, y: -100 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 * (index + 1) }}
				>
					<OrganizationCard
						name={data.name}
						slug={data.slug}
						image={data.image}
						bio={data.bio}
						members={data.members}
					/>
				</motion.div>
			))}
		</div>
	);
}
