"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: -20,
	},
	whileInView: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.2 * index,
		},
	}),
};

interface DataProp {
	title: string;
	img: string;
	description: string;
	slug: string;
	details: string;
}

interface Props {
	data: DataProp;
	index: number;
}

export default function ThreatCard({ data, index }: Props) {
	return (
		<motion.article
			key={data.slug}
			variants={fadeInAnimationVariants}
			initial="initial"
			whileInView="whileInView"
			viewport={{ once: true }}
			custom={index}
			className="p-2 shadow-sm hover:shadow w-full rounded-xl border relative drop-shadow-lg dark:bg-slate-900 bg-white dark:bg-opacity-40 bg-opacity-50 transform-gpu sm:backdrop-blur"
		>
			<Link className="w-full flex gap-3" href={`/threats/${data.slug}`}>
				<div className="flex items-center">
					<Image
						src={data.img}
						height={80}
						width={80}
						className="object-cover rounded-full"
						alt={data.title}
					/>
				</div>
				<div className="flex justify-center flex-col gap-1.5">
					<h1 className="font-medium">{data.title}</h1>
					<p className="text-[13px] dark:text-slate-300 text-slate-800">
						{data.description}
					</p>
				</div>
			</Link>
		</motion.article>
	);
}
