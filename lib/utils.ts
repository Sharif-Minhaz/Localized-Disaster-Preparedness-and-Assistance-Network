import { type ClassValue, clsx } from "clsx";
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

export function addCommasToNumber(number: number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
