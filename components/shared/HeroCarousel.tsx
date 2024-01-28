"use client";

import { heroCarousel } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroCarousel() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % heroCarousel.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<motion.div
			key={index}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
		>
			<Image
				draggable={false}
				src={heroCarousel[index].img}
				className="object-cover rounded-md group-hover:scale-105 transition-all"
				fill
				quality={100}
				sizes="100vw"
				alt={heroCarousel[index].text}
			/>
		</motion.div>
	);
}
