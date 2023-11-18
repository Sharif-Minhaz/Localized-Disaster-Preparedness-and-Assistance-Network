"use client";

import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Languages, Bell } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext } from "react";
import { MainContext } from "@/contexts/MainContext";
import { SearchBar } from ".";

export default function Navbar() {
	const { handleLang, lang } = useContext(MainContext);

	return (
		<nav className="sticky z-10 flex top-0 w-full items-center justify-between pl-1 py-1 pr-5 bg-white dark:bg-slate-950 shadow-md dark:shadow-slate-900">
			<SearchBar routeType="" />
			<div className="flex gap-6">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<span className="border rounded-full inline-flex p-2 cursor-pointer">
							<Languages size={18} />
						</span>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56">
						<DropdownMenuLabel>Translation</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuRadioGroup value={lang} onValueChange={handleLang}>
							<DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="bn">বাংলা</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuContent>
				</DropdownMenu>

				<SignedIn>
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Bell />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>Notifications</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Notification 1</DropdownMenuItem>
							<DropdownMenuItem>Notification 2</DropdownMenuItem>
							<DropdownMenuItem>Notification 3</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					{/* hide logout button in the biggest screens */}
					<div className="md:hidden">
						<SignOutButton>
							<div className="flex cursor-pointer">
								<Image
									src="/assets/icons/logout.svg"
									alt="logout"
									width={24}
									height={24}
									className="invert brightness-100"
								/>
							</div>
						</SignOutButton>
					</div>

					<UserButton />
				</SignedIn>
				<SignedOut>
					<div className="flex items-center gap-2 text-blue-900">
						<Link href="/sign-in">Sign In</Link>/<Link href="/sign-up">Sign Up</Link>
					</div>
				</SignedOut>
			</div>
		</nav>
	);
}
