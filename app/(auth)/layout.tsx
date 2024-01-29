import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "LDPAN | Auth",
	description:
		"A localized web-based platform that serves as a disaster preparedness and assistance network. This platform will connect communities, local authorities, and volunteers, facilitating the sharing of critical information, resources, and assistance during emergencies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return <section className="flex justify-center items-center min-h-screen w-full">{children}</section>;
}
