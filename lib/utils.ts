import { type ClassValue, clsx } from "clsx";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import emailjs from "@emailjs/browser";
import { addDays, format } from "date-fns";

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

export function formatDate(date?: string | Date) {
	const actualDate = new Date(date || Date.now());

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

	const formattedDate = actualDate.toLocaleString("en-US", options); // Jan 01, 2024, 24:00:00

	return formattedDate;
}

export function formatToShortDate(msDate: number | Date | null | string) {
	const date = new Date(msDate || Date.now());
	const options = {
		year: "numeric",
		month: "short",
		day: "numeric",
	};
	// @ts-ignore
	const formatter = new Intl.DateTimeFormat("en-US", options); // Jan 1, 2024
	return formatter.format(date);
}

export function formatDateToISO(inputDateString: string | Date) {
	// Convert input string to a Date object
	const inputDate = new Date(inputDateString);

	// Add two days to the input date
	const newDate = addDays(inputDate, 2);

	// Format the new date as 'YYYY-MM-DD'
	const formattedDate = format(newDate, "yyyy-MM-dd");

	return formattedDate;
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

interface IContactFormData {
	firstName: string;
	lastName: string;
	contact?: string;
	email: string;
	message: string;
}

export async function receiveEmailFromUser(formData: IContactFormData) {
	const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
	const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
	const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

	if (!serviceId || !templateId || !publicKey) {
		return { success: false, err: "ENV var missing!" };
	}

	return emailjs
		.send(
			serviceId,
			templateId,
			{
				from_name: `${formData.firstName} ${formData.lastName}`,
				to_name: "LDPAN",
				from_email: formData.email,
				to_email: "smmr.career@gmail.com",
				message: `${formData.message}. Email: ${formData.email}. Contact No: ${formData.contact}`,
			},
			publicKey
		)
		.then(() => {
			return { success: true, err: null };
		})
		.catch((err) => {
			console.log(err);
			return { success: false, err: err.message };
		});
}

export const generatePagination = (currentPage: number, totalPages: number) => {
	// If the total number of pages is 7 or less,
	// display all pages without any ellipsis.
	if (totalPages <= 7) {
		return Array.from({ length: totalPages }, (_, i) => i + 1);
	}

	// If the current page is among the first 3 pages,
	// show the first 3, an ellipsis, and the last 2 pages.
	if (currentPage <= 3) {
		return [1, 2, 3, "...", totalPages - 1, totalPages];
	}

	// If the current page is among the last 3 pages,
	// show the first 2, an ellipsis, and the last 3 pages.
	if (currentPage >= totalPages - 2) {
		return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
	}

	// If the current page is somewhere in the middle,
	// show the first page, an ellipsis, the current page and its neighbors,
	// another ellipsis, and the last page.
	return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
};
