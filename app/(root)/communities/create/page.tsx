import { CommunityForm, Container } from "@/components/shared";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Community",
};

export default async function CreateCommunityPage() {
	const user = await currentUser();

	if (!user) {
		return redirect("/");
	}

	return (
		<Container headingText="Create New Community">
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<CommunityForm adminId={user.id} />
			</div>
		</Container>
	);
}
