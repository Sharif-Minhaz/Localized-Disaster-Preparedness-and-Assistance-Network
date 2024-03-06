import { HeadingSection, Posts } from "@/components/shared";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function MyPostPage() {
	const user = await currentUser();
	if (!user) return redirect("/");

	return (
		<>
			<section className="shadow rounded-xl border">
				<HeadingSection text="My Posts" />
				<Posts personal clerkId={user.id} />
			</section>
			<section className="shadow rounded-xl border mt-5">
				<HeadingSection text="Bookmarked Posts" />
				<p className="p-4">You have no bookmarked post</p>
			</section>
		</>
	);
}
