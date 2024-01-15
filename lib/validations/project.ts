import * as z from "zod";

export const ProjectValidation = z.object({
	heading: z
		.string()
		.min(3, { message: "Must be 3 or more characters long" })
		.max(500, { message: "Must be 500 or fewer characters long" }),
	from: z.date(),
	to: z.date(),
	// from: z.string().datetime({ message: "Invalid datetime string! Must be UTC." }),
	// to: z.string().datetime({ message: "Invalid datetime string! Must be UTC." }),
	partnerOrganizations: z
		.string()

		.max(500, { message: "Must be 500 or fewer characters long" }),
	description: z
		.string()
		.min(3, { message: "Must be 3 or more characters long" })
		.max(5000, { message: "Must be 5000 or fewer characters long" }),
	details: z
		.string()
		.min(3, { message: "Must be 3 or more characters long" })
		.max(15000, { message: "Must be 15000 or fewer characters long" }),
	image: z.string().url({ message: "Image missing or invalid image" }),
});