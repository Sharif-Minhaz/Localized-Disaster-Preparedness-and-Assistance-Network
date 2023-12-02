import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { MainContextProvider } from "@/contexts/MainContext";
import { Navbar, Sidebar } from "@/components/shared";

const ClerkThemeProvider = dynamic(() => import("@/lib/providers/ClerkThemeProvider"), {
	ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "LDPAN",
	description:
		"A localized web-based platform that serves as a disaster preparedness and assistance network. This platform will connect communities, local authorities, and volunteers, facilitating the sharing of critical information, resources, and assistance during emergencies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<MainContextProvider>
			<html lang="en">
				<ClerkThemeProvider>
					<body className={inter.className}>
						<Sidebar />
						<main className="ml-0 lg:ml-[255px]">
							<Navbar />
							<div className="p-5">{children}</div>
						</main>
					</body>
				</ClerkThemeProvider>
			</html>
		</MainContextProvider>
	);
}
