import * as z from "zod";

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const DonationValidation = z
	.object({
		note: z.string().optional(),
		donationType: z.string().min(1, { message: "Must be select one of the type" }),
		donationAmount: z.string(),
		donationUnit: z.string(),
		mobile: z.string().regex(phoneRegex, "Invalid mobile number"),
		shipperName: z.string(),
		resourceName: z.string(),
	})
	.superRefine((val, ctx) => {
		if (val.donationType === "money" && !val.donationAmount) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Donation amount required",
				path: ["donationAmount"],
			});
		}

		if (val.donationType === "resource" && !val.donationUnit) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Donation unit required",
				path: ["donationUnit"],
			});
		}

		if (val.donationType === "resource" && !val.shipperName) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Shipper's name is required",
				path: ["shipperName"],
			});
		}

		if (val.donationType === "resource" && !val.resourceName) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Resource name is required",
				path: ["resourceName"],
			});
		}
	});
