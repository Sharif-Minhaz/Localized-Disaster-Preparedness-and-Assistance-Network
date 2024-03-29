import { Container, ProjectForm } from "@/components/shared";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Project",
};

export default async function CreateProjectPage() {
	const user = await currentUser();

	if (!user) return redirect("/");

	return (
		<Container headingText="Create New Project">
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<ProjectForm adminId={user.id} />
			</div>
		</Container>
	);
}
