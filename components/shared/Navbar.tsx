"use client";

import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Languages } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useContext } from "react";
import { MainContext } from "@/contexts/MainContext";

export default function Navbar() {
	const { handleLang, lang } = useContext(MainContext);

	return (
		<nav>
			Initial Navbar information:
			<div className="flex">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline">
							<Languages />
						</Button>
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

					<UserButton />
				</SignedIn>
				<SignedOut>
					<Link href="/sign-in">Login</Link>
				</SignedOut>
			</div>
		</nav>
	);
}
