import { type ClassValue, clsx } from "clsx";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function isBase64Image(imageData: string) {
	const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
	return base64Regex.test(imageData);
}

export function getImageKey(url: string) {
	// Split the URL by '/'
	const urlParts = url.split("/");

	// Get the last part of the URL (filename)
	const filename = urlParts[urlParts.length - 1];

	return filename;
}

export function convertToPlainObj(obj: any) {
	return JSON.parse(JSON.stringify(obj));
}

export function formatDate(date: string) {
	const actualDate = new Date(date);

	const options = {
		year: "numeric" as const,
		month: "short" as const,
		day: "2-digit" as const,
		hour: "2-digit" as const,
		minute: "2-digit" as const,
		second: "2-digit" as const,
		hour12: false,
		timeZone: "UTC",
	};

	const formattedDate = actualDate.toLocaleString("en-US", options);

	return formattedDate;
}

export function formatToShortDate(msDate: number | Date | null) {
	const date = new Date(msDate || Date.now());
	const options = {
		year: "numeric",
		month: "short",
		day: "numeric",
	};
	// @ts-ignore
	const formatter = new Intl.DateTimeFormat("en-US", options);
	return formatter.format(date);
}

export function handleImage(
	e: ChangeEvent<HTMLInputElement>,
	fieldChange: (value: string) => void,
	setFiles: Dispatch<SetStateAction<File[]>>
) {
	e.preventDefault();

	const fileReader = new FileReader();

	if (e.target.files && e.target.files.length > 0) {
		const file = e.target.files[0];
		setFiles(Array.from(e.target.files));

		if (!file.type.includes("image")) return;

		fileReader.onload = async (event) => {
			const imageDataUrl = event.target?.result?.toString() || "";
			fieldChange(imageDataUrl);
		};

		fileReader.readAsDataURL(file);
	}
}
