"use client";

// import { MainContext } from "@/contexts/MainContext";
// import { useContext } from "react";
import { Navbar } from ".";

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="ml-0 lg:ml-[255px]">
			<Navbar />
			<div className="p-5">{children}</div>
		</main>
	);
}
