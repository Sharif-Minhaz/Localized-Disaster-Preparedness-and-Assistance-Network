import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { MainContextProvider } from "@/contexts/MainContext";
import ClerkThemeProvider from "@/lib/providers/ClerkThemeProvider";
import { Suspense } from "react";
import MainPageFallback from "@/components/shared/MainPageFallback";
import { Toaster } from "@/components/ui/toaster";
import { inter, montserrat } from "@/fonts";
import ogImg from "../assets/og-img.webp";
import {
	APP_DEFAULT_TITLE,
	APP_DESCRIPTION,
	APP_NAME,
	APP_TITLE_TEMPLATE,
	AUTHOR,
	AUTHOR_WEBSITE,
} from "@/constants";

export const metadata: Metadata = {
	metadataBase: new URL("https://ldpan-v4.vercel.app"),
	applicationName: APP_NAME,
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE,
	},
	keywords: [
		"LDPAN",
		"ldpan-v4",
		"weather",
		"localized",
		"disaster",
		"localized-disaster",
		"preparedness",
		"assistance-network",
		"minhaz-final-year-project",
		"Localized-Disaster-Preparedness-&-Assistance-Network",
	],
	authors: [{ name: AUTHOR, url: AUTHOR_WEBSITE }],
	creator: AUTHOR,
	publisher: AUTHOR,
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
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	category: "nature",
	openGraph: {
		type: "website",
		siteName: APP_NAME,
		title: {
			default: `${APP_NAME} (${APP_DEFAULT_TITLE})`,
			template: APP_TITLE_TEMPLATE,
		},
		images: [
			{
				url: ogImg.src,
				width: 800,
				height: 600,
			},
		],
		description: APP_DESCRIPTION,
	},
	twitter: {
		card: "summary",
		title: {
			default: `${APP_NAME} (${APP_DEFAULT_TITLE})`,
			template: APP_TITLE_TEMPLATE,
		},
		images: [
			{
				url: ogImg.src,
				width: 800,
				height: 600,
			},
		],
		description: APP_DESCRIPTION,
	},
};

export const viewport: Viewport = {
	themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${inter.variable} ${montserrat.variable} font-inter`}
				suppressHydrationWarning={true}
				style={{ maxWidth: "1800px", marginInline: "auto" }}
			>
				<MainContextProvider>
					<Suspense fallback={<MainPageFallback />}>
						<ClerkThemeProvider>{children}</ClerkThemeProvider>
					</Suspense>
				</MainContextProvider>
				<Toaster />
				{/* ------ google analytics component to track the website properties ------ */}
				<GoogleAnalytics gaId="G-MR2T9CC27W" />
			</body>
		</html>
	);
}
