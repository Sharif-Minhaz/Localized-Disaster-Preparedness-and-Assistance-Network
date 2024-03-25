import type { Metadata, Viewport } from "next";
import "./globals.css";
import { MainContextProvider } from "@/contexts/MainContext";
import ClerkThemeProvider from "@/lib/providers/ClerkThemeProvider";
import { Suspense } from "react";
import MainPageFallback from "@/components/shared/MainPageFallback";
import { Toaster } from "@/components/ui/toaster";
import { inter, montserrat } from "@/fonts";
import { APP_DEFAULT_TITLE, APP_DESCRIPTION, APP_NAME, APP_TITLE_TEMPLATE } from "@/constants";

export const metadata: Metadata = {
	applicationName: APP_NAME,
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE,
	},
	description: APP_DESCRIPTION,
	manifest: "/manifest.json",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: APP_DEFAULT_TITLE,
		// startUpImage: [],
	},
	formatDetection: {
		telephone: false,
	},
	openGraph: {
		type: "website",
		siteName: APP_NAME,
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE,
		},
		description: APP_DESCRIPTION,
	},
	twitter: {
		card: "summary",
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE,
		},
		description: APP_DESCRIPTION,
	},
};

export const viewport: Viewport = {
	themeColor: "#FFFFFF",
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
