import { HeadingSection, Posts } from "@/components/shared";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function MyPostPage() {
	const user = await currentUser();
	if (!user) return redirect("/");

	return (
		<>
			<section className="shadow-md dark:shadow-gray-900 rounded-xl border">
				<HeadingSection text="My Posts" />
				<Posts personal clerkId={user.id} />
			</section>
			<section className="shadow-md dark:shadow-gray-900 rounded-xl border mt-5">
				<HeadingSection text="Bookmarked Posts" />
				<Posts bookmarked clerkId={user.id} />
			</section>
		</>
	);
}
