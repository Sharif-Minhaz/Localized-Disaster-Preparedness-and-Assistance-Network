"use client";

import { MainContext } from "@/contexts/MainContext";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useContext } from "react";

export default function ClerkThemeProvider({ children }: { children: React.ReactNode }) {
	const { theme } = useContext(MainContext);

	return (
		<ClerkProvider
			appearance={{
				baseTheme: theme === "dark" ? dark : undefined,
				layout: {
					logoImageUrl: theme === "dark" ? "/icons/logo-2.png" : "/icons/logo.png",
				},
			}}
		>
			{children}
		</ClerkProvider>
	);
}
