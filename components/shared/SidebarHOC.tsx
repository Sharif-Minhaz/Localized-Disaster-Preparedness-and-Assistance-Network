"use client";

import { useUser } from "@clerk/nextjs";
import Sidebar from "./Sidebar";

export default function SidebarHOC() {
	const { user } = useUser();
	const userType = user?.publicMetadata?.userType || "";

	if (userType === "admin") {
		return <Sidebar isAdmin />;
	}

	return <Sidebar />;
}
