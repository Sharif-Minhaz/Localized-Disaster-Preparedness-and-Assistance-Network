import {
	OrganizationSwitcher,
	SignOutButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav>
			Initial Navbar information:
			<div>
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
					<OrganizationSwitcher
						appearance={{
							elements: {
								organizationSwitcherTrigger: "py-2 px-4",
							},
						}}
					/>
				</SignedIn>
				<SignedOut>
					<Link href="/sign-in">Login</Link>
				</SignedOut>
			</div>
		</nav>
	);
}
