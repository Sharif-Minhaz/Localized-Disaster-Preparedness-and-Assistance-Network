"use client";

import { IGallery } from "@/lib/models/GalleryModel";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function GalleryImage({ image, index }: { image: IGallery; index: number }) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isInView, setIsInView] = useState(false);

	return (
		<motion.article
			initial={false}
			animate={
				isLoaded && isInView
					? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
					: { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
			}
			transition={{ duration: 1.5, delay: 0.5 * index }}
			viewport={{ once: true }}
			onViewportEnter={() => setIsInView(true)}
			className="relative group w-full h-[240px] border shadow-md dark:shadow-gray-900 rounded-xl"
			key={image._id}
		>
			<Image
				fill
				onLoad={() => setIsLoaded(true)}
				className="w-full h-full object-cover rounded-xl"
				src={image.image}
				alt={image.heading}
			/>
			<div className="group-hover:opacity-100 transition-all duration-500 opacity-0 top-0 text-[12px] w-full h-full rounded-b-xl rounded-t-xl absolute text-white text-center p-2 bg-black/50">
				{image.description}
			</div>
			<div className="bottom-0 text-sm w-full rounded-b-xl absolute text-white text-center p-2 bg-black/50">
				{image.heading}
			</div>
		</motion.article>
	);
}
