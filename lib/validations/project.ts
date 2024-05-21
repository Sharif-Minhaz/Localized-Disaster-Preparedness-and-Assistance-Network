import * as z from "zod";

const volunteerSchema = z.object({
	value: z.string(),
	label: z.string(),
});

export const ProjectValidation = z.object({
	heading: z
		.string()
		.min(3, { message: "Must be 3 or more characters long" })
		.max(500, { message: "Must be 500 or fewer characters long" }),
	from: z.date(),
	to: z.date(),
	partnerOrganizations: z.string().optional(),
	location: z.string().min(2, { message: "Location must be detailed" }),
	courierAddress: z.string().min(2, { message: "Courier address must be detailed" }),
	description: z
		.string()
		.min(3, { message: "Must be 3 or more characters long" })
		.max(5000, { message: "Must be 5000 or fewer characters long" }),
	details: z
		.string()
		.min(3, { message: "Must be 3 or more characters long" })
		.max(15000, { message: "Must be 15000 or fewer characters long" }),
	image: z.string().url({ message: "Image missing or invalid image" }),
	volunteers: z.array(volunteerSchema),
});
