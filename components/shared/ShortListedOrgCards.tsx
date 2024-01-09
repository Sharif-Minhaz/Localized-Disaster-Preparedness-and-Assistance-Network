"use client";

import { motion } from "framer-motion";
import { OrganizationCard } from ".";

interface Community {
	_id?: string;
	id: string;
	name: string;
	username: string;
	bio: string;
	image: string;
	createdBy?: string;
	members: object[];
	__v?: number;
}

interface ShortListedOrgCardsProps {
	communities: Community[];
	isNext: boolean;
}

export default function ShortListedOrgCards({ communities, isNext }: ShortListedOrgCardsProps) {
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
						username={data.username}
						image={data.image}
						bio={data.bio}
						members={data.members}
					/>
				</motion.div>
			))}
		</div>
	);
}
