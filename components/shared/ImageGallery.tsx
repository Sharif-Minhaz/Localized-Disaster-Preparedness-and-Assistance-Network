"use client";

import { IGallery } from "@/lib/models/GalleryModel";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchImages } from "@/lib/actions/gallery.actions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GalleryLoader } from "@/components/shared";

export default function ImageGallery() {
	const [images, setImages] = useState<IGallery[]>([]);
	const [hasMore, setHasMore] = useState(true);
	const [offset, setOffset] = useState(2);

	useEffect(() => {
		async function fetchData() {
			fetchImages()
				.then((data) => {
					setImages(data);
				})
				.catch((err) => console.error(err));
		}
		fetchData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function fetchMoreData() {
		fetchImages(offset)
			.then((data) => {
				setImages((prevItems) => [...prevItems, ...data]);

				if (data.length === 0) {
					setHasMore(false);
				}
			})
			.catch((err) => console.error(err));

		setOffset((prevIndex) => prevIndex + 1);
	}

	return (
		<section>
			<InfiniteScroll
				className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
				dataLength={images.length}
				next={fetchMoreData}
				hasMore={hasMore}
				loader={<GalleryLoader />}
			>
				{images.map((image) => (
					<article
						className="relative group w-full h-[240px] border shadow-md dark:shadow-gray-900 rounded-xl"
						key={image._id}
					>
						<Image
							fill
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
					</article>
				))}
			</InfiniteScroll>
			{!hasMore && (
				<p className="text-center px-4 my-4 mt-8">
					You have seen it all. Check again for more updates.
				</p>
			)}
		</section>
	);
}
