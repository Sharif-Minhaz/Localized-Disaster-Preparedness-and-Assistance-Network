"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

import { Input } from "../ui/input";
import { Search, XCircle } from "lucide-react";

interface Props {
	routeType?: string;
}

export default function SearchBar({ routeType }: Props) {
	const router = useRouter();
	const [search, setSearch] = useState("");
	const [isOpenSearch, setIsOpenSearch] = useState(false);

	// query after 0.3s of no input
	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (routeType) router.push(`/${routeType}?q=` + search);
		}, 300);

		return () => clearTimeout(delayDebounceFn);
	}, [search, routeType, router]);

	const openSearch = () => {
		setIsOpenSearch(true);
	};

	const closeSearch = () => {
		setIsOpenSearch(false);
	};

	return (
		<>
			<div className="flex relative gap-1 rounded-lg px-4 py-2 items-center">
				<span
					onClick={openSearch}
					className="absolute left-3 sm:left-6 inline-flex sm:cursor-auto cursor-pointer sm:border-none border sm:p-0 p-2 rounded-[10px]"
				>
					<Search />
				</span>
				<Input
					id="text"
					value={search}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
					placeholder="Search communities"
					className="no-focus sm:flex hidden border rounded-[10px] text-base outline-none pl-9"
				/>
			</div>
			{isOpenSearch && (
				<div className="fixed w-[calc(100%-32px)] top-[60px] sm:hidden dark:bg-slate-900 bg-slate-100 p-3 rounded-b">
					<div className="relative">
						<Input
							id="text"
							value={search}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setSearch(e.target.value)
							}
							placeholder="Search communities"
							className="no-focus flex border rounded-[10px] text-base outline-none pr-9 dark:bg-slate-800"
						/>
						<span
							onClick={closeSearch}
							className="absolute top-0 right-0 inline-flex items-center justify-center p-2 cursor-pointer"
						>
							<XCircle />
						</span>
					</div>
				</div>
			)}
		</>
	);
}
