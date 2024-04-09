"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Banner() {
	return (
		<div className="full-bleed banner-bg bg-[url('/images/pat.png')] bg-center h-56 sm:h-64 flex justify-center items-center gap-5 sm:gap-10">
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				viewport={{ once: true }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				className="w-[400px]"
			>
				<h1 className="sm:text-3xl text-2xl">Prepare. Respond. Thrive</h1>
				<p className="py-2 text-sm mb-2 sm:mb-4">
					Empower communities. Save lives. Be disaster-ready. Your support makes a
					difference.
				</p>
				<Button className="rounded-xl text-sm bg-bluish hover:shadow-lg">
					<Link href="/projects">Donate</Link>
				</Button>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				viewport={{ once: true }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Image
					draggable={false}
					src="/images/banner-img.png"
					width={170}
					height={170}
					alt="image"
				/>
			</motion.div>
		</div>
	);
}
