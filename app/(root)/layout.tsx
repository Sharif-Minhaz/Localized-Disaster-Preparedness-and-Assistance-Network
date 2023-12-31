import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { MainContextProvider } from "@/contexts/MainContext";
import { Footer, Navbar, Sidebar } from "@/components/shared";
import ClerkThemeProvider from "@/lib/providers/ClerkThemeProvider";
import { Suspense } from "react";
import MainPageFallback from "@/components/shared/MainPageFallback";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "LDPAN",
	description:
		"A localized web-based platform that serves as a disaster preparedness and assistance network. This platform will connect communities, local authorities, and volunteers, facilitating the sharing of critical information, resources, and assistance during emergencies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<MainContextProvider>
					<Suspense fallback={<MainPageFallback />}>
						<ClerkThemeProvider>
							<Sidebar />
							<main className="ml-0 lg:ml-[255px]">
								<Navbar />
								<div className="sm:p-5 sm:pb-0 p-4 pb-0">
									{children}
									<section className="mt-8">
										<Footer />
									</section>
								</div>
							</main>
						</ClerkThemeProvider>
					</Suspense>
				</MainContextProvider>
			</body>
		</html>
	);
}
