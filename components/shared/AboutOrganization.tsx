"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutOrganization() {
	return (
		<div className="p-4 flex gap-8">
			<motion.div
				initial={{ opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.2 }}
				className="hidden sm:flex bg-[url(/images/circle-scatter-about.svg)] bg-[right_10%] bg-no-repeat"
			>
				<div className="flex flex-col justify-center">
					<div className="w-[170px] h-[170px] relative">
						<Image
							src="/images/about-1.png"
							quality={100}
							sizes="100vw"
							fill
							className="object-cover"
							alt=""
						/>
					</div>
					<div className="w-[170px] h-[170px] relative">
						<Image
							src="/images/about-3.png"
							quality={100}
							sizes="100vw"
							fill
							className="object-cover"
							alt=""
						/>
					</div>
				</div>
				<div className="flex items-center">
					<div className="w-[170px] h-[170px] mt-7 relative">
						<Image
							src="/images/about-2.png"
							quality={100}
							sizes="100vw"
							fill
							className="object-cover"
							alt=""
						/>
					</div>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.2 }}
				className="flex flex-col gap-4"
			>
				<h1 className="text-lg font-bold">
					Dedicated to building a resilient future, our focus is on{" "}
					<span className="text-bluish-inverse font-bold">Bangladesh</span>.
				</h1>
				<p className="first-letter:text-5xl first-letter:font-montserrat first-letter:float-left first-letter:mr-2 first-letter:font-semibold">
					At the heart of our organization is a commitment to rapid and effective disaster
					response. We understand the urgency of providing immediate aid, and through your
					generous donations, we are able to mobilize quickly, offering vital resources,
					shelter, and comfort to those affected. Our focus is on making a tangible
					difference in the lives of individuals and families grappling with the aftermath
					of emergencies.
				</p>
				<div className="border-b border-gray-200 dark:border-gray-800" />
				<p>
					Your generosity makes a profound impact on the lives of those in crisis. By
					joining hands with us, you enable our team to respond swiftly and
					comprehensively to emergencies. Your donations not only provide immediate relief
					but also contribute to the long-term resilience of communities. Together, we are
					creating a network of support that fosters hope, strength, and the capacity to
					overcome the challenges posed by disasters.
				</p>
			</motion.div>
		</div>
	);
}
