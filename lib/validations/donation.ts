import * as z from "zod";

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const DonationValidation = z.object({
	note: z
		.string()
		.min(3, { message: "Must be 3 or more characters long" })
		.max(1000, { message: "Must be 1000 or fewer characters long" }),
	donationType: z.string().min(1, { message: "Must be select one of the type" }),
	donationAmount: z.number().min(1, { message: "Amount can't be less that $1" }),
	donationUnit: z.number().min(1, { message: "Unit must be minimum 1" }),
	mobile: z.string().regex(phoneRegex, "Invalid Number!"),
	donationNameCourier: z.string().min(3, { message: "Must be 3 or more characters long" }),
	resourceName: z.string().min(1, { message: "Resource name required" }),
});
