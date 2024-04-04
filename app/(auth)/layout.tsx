import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Auth",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<section className="flex justify-center items-center min-h-screen w-full">
			{children}
		</section>
	);
}
