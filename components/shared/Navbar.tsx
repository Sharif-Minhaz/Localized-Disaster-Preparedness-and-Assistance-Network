"use client";

import { UserButton, useAuth, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
	const { isSignedIn, isLoaded } = useAuth();
	const { signOut } = useClerk();
	const router = useRouter();

	return (
		<nav>
			Navbar: {isLoaded && isSignedIn ? <UserButton /> : <Link href="/sign-in">Login</Link>}
			<button onClick={() => signOut(() => router.push("/sign-in"))}>Sign out</button>
		</nav>
	);
}
