import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainContextProvider } from "@/contexts/MainContext";
import ClerkThemeProvider from "@/lib/providers/ClerkThemeProvider";
import { Suspense } from "react";
import MainPageFallback from "@/components/shared/MainPageFallback";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "LDPAN",
	description:
		"A localized web-based platform that serves as a disaster preparedness and assistance network. This platform will connect communities, local authorities, and volunteers, facilitating the sharing of critical information, resources, and assistance during emergencies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${inter.className}`}>
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
