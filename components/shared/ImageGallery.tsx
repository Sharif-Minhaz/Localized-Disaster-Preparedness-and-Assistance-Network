"use client";

import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MouseEventHandler } from "react";

export interface ImageDist {
	original: string;
	thumbnail: string;
	loading: "lazy" | "eager";
	description: string;
	originalTitle: string;
	thumbnailClass: string;
	originalClass: string;
}

function changeImgHeight(fullScreen: boolean) {
	const elements = document.querySelectorAll(".main-gallery-img>img.image-gallery-image");
	if (fullScreen) {
		elements.forEach((element) => {
			element?.classList.add("full-screen");
		});
	} else {
		elements.forEach((element) => {
			element?.classList.remove("full-screen");
		});
	}
}

export default function ImageGallery({ images }: { images: ImageDist[] }) {
	function LeftNav(onClick: MouseEventHandler<HTMLElement>, disabled: boolean) {
		return (
			<Button
				type="button"
				className="image-gallery-icon image-gallery-left-nav !p-0 !bg-transparent hover:!text-blue-300"
				variant="ghost"
				onClick={onClick}
				disabled={disabled}
				aria-label="Previous Slide"
			>
				<ChevronLeft size={60} />
			</Button>
		);
	}

	function RightNav(onClick: MouseEventHandler<HTMLElement>, disabled: boolean) {
		return (
			<Button
				type="button"
				variant="outline"
				className="image-gallery-icon image-gallery-right-nav !p-0 !bg-transparent hover:!text-blue-300"
				onClick={onClick}
				disabled={disabled}
				aria-label="Next Slide"
			>
				<ChevronRight size={60} />
			</Button>
		);
	}

	return (
		<ReactImageGallery
			showBullets
			showIndex
			items={images}
			renderLeftNav={LeftNav}
			renderRightNav={RightNav}
			onScreenChange={changeImgHeight}
		/>
	);
}
