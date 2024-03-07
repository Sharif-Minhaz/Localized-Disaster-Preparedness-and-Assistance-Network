import * as z from "zod";

export const ApplicationValidation = z.object({
	name: z
		.string()
		.min(3, { message: "Must be 3 or more characters long" })
		.max(100, { message: "Must be 100 or fewer characters long" }),
	why: z
		.string()
		.min(10, { message: "Must be 10 or more characters long" })
		.max(1000, { message: "Must be 1000 or fewer characters long" }),
	documentImg: z.string().url({ message: "Image missing or invalid image" }),
});
