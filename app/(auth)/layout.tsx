import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { defaultLocale } from "@/middleware";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "LNDPAN | Auth",
	description:
		"A localized web-based platform that serves as a disaster preparedness and assistance network. This platform will connect communities, local authorities, and volunteers, facilitating the sharing of critical information, resources, and assistance during emergencies.",
};

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<ClerkProvider>
			<html lang={params.lang ?? defaultLocale}>
				<body className={inter.className}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
