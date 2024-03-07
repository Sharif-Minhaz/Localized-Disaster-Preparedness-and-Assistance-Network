"use server";

import { UTApi } from "uploadthing/server";
import { getImageKey } from "../utils";
import nodemailer from "nodemailer";

const utapi = new UTApi();

export const deleteUTImage = async (url: string) => {
	return utapi.deleteFiles(getImageKey(url));
};

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	secure: false, // Use `true` for port 465, `false` for all other ports
	auth: {
		user: process.env.SMTP_USERNAME,
		pass: process.env.SMTP_PASSWORD,
	},
});

export const sendMail = async ({
	to,
	subject,
	html,
}: {
	to: any[];
	subject: string;
	html: string;
}) => {
	await transporter.sendMail({
		from: '"LDPAN" <smmr.career@gmail.com>', // sender address
		to,
		subject,
		html,
	});
};
