import { Container, ProjectForm } from "@/components/shared";
import { currentUser } from "@clerk/nextjs";
import { getAllVolunteers } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Project",
};

export default async function CreateProjectPage() {
	const [user, volunteers] = await Promise.all([currentUser(), getAllVolunteers()]);

	if (!user) return redirect("/");

	return (
		<Container headingText="Create New Project">
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<ProjectForm adminId={user.id} volunteers={volunteers} />
			</div>
		</Container>
	);
}
