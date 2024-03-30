import * as z from "zod";

export const DisasterValidation = z.object({
	location: z.string().min(1, { message: "Location is required" }),
	date: z.date({
		required_error: "Please select a date and time",
		invalid_type_error: "That's not a date!",
	}),
});
