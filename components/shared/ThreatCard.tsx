"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
			initial={{ y: -20, opacity: 0 }}
			viewport={{ once: true }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.1 * index, duration: 0.2 }}
			className="p-2 shadow-sm hover:shadow transition-all w-full rounded-md border relative drop-shadow-lg dark:bg-slate-900 bg-white dark:bg-opacity-40 bg-opacity-50 backdrop-blur"
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
					<h1 className="font-roboto font-medium">{data.title}</h1>
					<p className="text-[13px] dark:text-slate-300 text-slate-800">
						{data.description}
					</p>
				</div>
			</Link>
		</motion.article>
	);
}
