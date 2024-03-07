import { HeadingSection, ProjectsList, Search } from "@/components/shared";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { fetchProjects } from "@/lib/actions/project.actions";
import { IProject } from "@/lib/models/ProjectModel";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";

export default async function Projects({ searchParams }: { searchParams?: { query: string } }) {
	const user = await currentUser();
	let userInfo;
	if (user) {
		userInfo = await fetchUser(user?.id || "");
	}
	const { projects, isNext } = await fetchProjects({ searchString: searchParams?.query });

	return (
		<div className="shadow rounded-xl border">
			<HeadingSection text="Projects" />
			<div className="px-4 sm:px-5 pt-4 sm:pt-5 flex gap-2">
				<Search placeholder="Search projects..." />
				<Link href="/projects/create">
					<Button>
						<Plus />
					</Button>
				</Link>
			</div>
			<ProjectsList
				userType={userInfo.user_type}
				projects={projects as IProject[]}
				isNext={isNext}
			/>
		</div>
	);
}
