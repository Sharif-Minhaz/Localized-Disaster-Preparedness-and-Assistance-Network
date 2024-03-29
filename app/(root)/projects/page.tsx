import { Container, Pagination, ProjectsList, Search } from "@/components/shared";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { fetchProjects } from "@/lib/actions/project.actions";
import { IProject } from "@/lib/models/ProjectModel";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
};

export default async function Projects({
	searchParams,
}: {
	searchParams?: { query: string; page: string };
}) {
	const user = await currentUser();
	let userInfo;
	if (user) {
		userInfo = await fetchUser(user?.id || "");
	}
	const { projects, totalElements } = await fetchProjects({
		searchString: searchParams?.query,
		pageNumber: Number(searchParams?.page),
	});

	return (
		<Container headingText="Projects">
			<div className="px-4 sm:px-5 pt-4 sm:pt-5 flex gap-2">
				<Search placeholder="Search projects..." />
				{userInfo.user_type === "admin" && (
					<Link href="/projects/create">
						<Button>
							<Plus />
						</Button>
					</Link>
				)}
			</div>
			<ProjectsList userType={userInfo.user_type} projects={projects as IProject[]} />
			<div className="mt-2 mb-5 flex w-full justify-center">
				<Pagination totalPages={Math.ceil(totalElements / 5)} />
			</div>
		</Container>
	);
}
