import { HeadingSection, CommunityForm } from "@/components/shared";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function CreateCommunityPage({ params }: { params: { slug: string } }) {
	const user = await currentUser();

	if (!user) {
		return redirect("/");
	}

	return (
		<div className="shadow rounded-xl border">
			<HeadingSection text="Create Post" />
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<CommunityForm adminId={user.id} />
			</div>
		</div>
	);
}
