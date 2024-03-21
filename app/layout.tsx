import type { Metadata } from "next";
import "./globals.css";
import { MainContextProvider } from "@/contexts/MainContext";
import ClerkThemeProvider from "@/lib/providers/ClerkThemeProvider";
import { Suspense } from "react";
import MainPageFallback from "@/components/shared/MainPageFallback";
import { Toaster } from "@/components/ui/toaster";
import { inter, montserrat } from "@/fonts";

export const metadata: Metadata = {
	title: "LDPAN",
	description:
		"A localized web-based platform that serves as a disaster preparedness and assistance network. This platform will connect communities, local authorities, and volunteers, facilitating the sharing of critical information, resources, and assistance during emergencies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${inter.variable} ${montserrat.variable} font-inter`}>
				<MainContextProvider>
					<Suspense fallback={<MainPageFallback />}>
						<ClerkThemeProvider>{children}</ClerkThemeProvider>
					</Suspense>
				</MainContextProvider>
				<Toaster />
			</body>
		</html>
	);
}
