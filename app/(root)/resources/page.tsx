import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { PostSkeletons } from "@/components/shared";

export default async function ResourcesPage() {
	const user = await currentUser();

	if (!user) {
		return <p>Not logged in, login first.</p>;
	}

	const userInfo = await fetchUser(user.id);

	if (userInfo.user_type !== "admin") return redirect("/");

	return (
		<div className="w-full flex min-h-screen">
			<PostSkeletons />
		</div>
	);
}
