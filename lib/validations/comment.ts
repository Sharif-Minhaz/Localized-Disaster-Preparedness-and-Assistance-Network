import * as z from "zod";

export const CommentValidation = z.object({
	comment: z
		.string()
		.min(1, { message: "Must be 1 or more characters long" })
		.max(2000, { message: "Must be 100 or fewer characters long" }),
});
