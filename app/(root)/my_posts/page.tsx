import { Container, Posts } from "@/components/shared";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "My Posts",
};

export default async function MyPostPage() {
	const user = await currentUser();
	if (!user) return redirect("/");

	return (
		<>
			<Container headingText="My Posts">
				<Posts personal clerkId={user.id} />
			</Container>
			<Container headingText="Bookmarked Posts" className="mt-5">
				<Posts bookmarked clerkId={user.id} />
			</Container>
		</>
	);
}
