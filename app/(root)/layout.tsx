import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { MainContextProvider } from "@/contexts/MainContext";
import ClerkThemeProvider from "@/lib/providers/ClerkThemeProvider";
import { Navbar, Sidebar } from "@/components/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "LNDPAN",
	description:
		"A localized web-based platform that serves as a disaster preparedness and assistance network. This platform will connect communities, local authorities, and volunteers, facilitating the sharing of critical information, resources, and assistance during emergencies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<MainContextProvider>
			<ClerkThemeProvider>
				<html lang="en">
					<body className={inter.className}>
						<Sidebar />
						<main className="ml-[255px]">
							<Navbar />
							<div className="p-5">{children}</div>
						</main>
					</body>
				</html>
			</ClerkThemeProvider>
		</MainContextProvider>
	);
}
