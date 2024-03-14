import * as z from "zod";

export const ContactValidation = z.object({
	firstName: z
		.string()
		.min(3, { message: "Minimum 3 chars required" })
		.max(100, { message: "Must be 100 or fewer characters long" }),
	lastName: z
		.string()
		.min(3, { message: "Minimum 3 chars required" })
		.max(100, { message: "Must be 100 or fewer characters long" }),
	email: z.string().email({ message: "Invalid email" }),
	contact: z.string().optional(),
	message: z
		.string()
		.min(3, { message: "Minimum 3 chars required" })
		.max(1000, { message: "Must be 1000 or fewer characters long" }),
});
