"use client";

import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export default function Navbar() {
	return (
		<nav>
			Initial Navbar information:
			<div className="flex">
				<Button variant="outline" size="icon">
					<Languages />
				</Button>
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
