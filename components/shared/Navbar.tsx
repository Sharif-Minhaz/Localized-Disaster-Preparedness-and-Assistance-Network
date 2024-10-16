"use client";

import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Languages, AlignLeft } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext } from "react";
import { MainContext } from "@/contexts/MainContext";
import { Notification, Breadcrumb } from ".";

export default function Navbar() {
	const { handleLang, lang, openSidebar } = useContext(MainContext);

	return (
		<nav className="sticky z-20 h-16 flex top-0 w-full bg-opacity-30 dark:bg-opacity-40 backdrop-filter backdrop-blur-sm items-center justify-between lg:pl-1 pl-4 py-3 sm:py-1 lg:pr-5 pr-4 bg-white dark:bg-slate-950 shadow dark:shadow-slate-900">
			<div className="flex gap-2 items-center">
				<span className="cursor-pointer lg:hidden inline-flex" onClick={openSidebar}>
					<AlignLeft />
				</span>
				<Breadcrumb />
			</div>
			<div className="flex gap-4 md:gap-5">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<span
							aria-label="Open language selection"
							role="button"
							className="border bg-bluish-inverse text-white rounded-full inline-flex p-2 cursor-pointer"
						>
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
					<div className="flex items-center gap-4 md:gap-5">
						<Notification />
						{/* hide logout button in the biggest screens */}
						<SignedIn>
							<div className="md:hidden">
								<SignOutButton>
									<div className="flex cursor-pointer">
										<Image
											src="/icons/logout.svg"
											alt="logout"
											width={24}
											height={24}
											className="invert brightness-100 dark:brightness-0"
										/>
									</div>
								</SignOutButton>
							</div>
						</SignedIn>

						<UserButton afterSignOutUrl="/" />
					</div>
				</SignedIn>
				<SignedOut>
					<div className="flex items-center gap-2 text-blue-900 dark:text-blue-400">
						<Link href="/sign-in">Sign in</Link>/<Link href="/sign-up">Sign up</Link>
					</div>
				</SignedOut>
			</div>
		</nav>
	);
}
