import { HeadingSection, ProjectForm } from "@/components/shared";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function CreateProjectPage() {
	const user = await currentUser();

	if (!user) return redirect("/");

	return (
		<div className="shadow-md dark:shadow-gray-900 rounded-xl border">
			<HeadingSection text="Create New Project" />
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<ProjectForm adminId={user.id} />
			</div>
		</div>
	);
}
