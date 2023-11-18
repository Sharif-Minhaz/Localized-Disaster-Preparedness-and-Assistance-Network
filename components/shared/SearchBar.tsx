"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

import { Input } from "../ui/input";
import { Search } from "lucide-react";

interface Props {
	routeType?: string;
}

export default function SearchBar({ routeType }: Props) {
	const router = useRouter();
	const [search, setSearch] = useState("");

	// query after 0.3s of no input
	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (routeType) router.push(`/${routeType}?q=` + search);
		}, 300);

		return () => clearTimeout(delayDebounceFn);
	}, [search, routeType, router]);

	return (
		<div className="flex relative gap-1 rounded-lg px-4 py-2 items-center">
			<span className="absolute left-6">
				<Search />
			</span>
			<Input
				id="text"
				value={search}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
				placeholder="Search communities"
				className="no-focus border rounded-[10px] text-base outline-none pl-9"
			/>
		</div>
	);
}
