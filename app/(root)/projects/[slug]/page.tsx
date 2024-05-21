import { Suspense } from "react";
import { fetchProject, fetchProjects } from "@/lib/actions/project.actions";
import MainPageFallback from "@/components/shared/MainPageFallback";
import {
	SinglePageProject,
	DonateSideBox,
	Container,
	AssignedVolunteers,
} from "@/components/shared";
import { IProject } from "@/lib/models/ProjectModel";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";

export async function generateMetadata({ params }: { params: { slug: string } }) {
	return {
		title: params.slug,
	};
}

export async function generateStaticParams() {
	const { projects } = await fetchProjects({});
	return projects.map((project: IProject) => ({ slug: project.slug }));
}

export default async function SingleProjectPage({ params }: { params: { slug: string } }) {
	const user = await currentUser();
	let userInfo;
	if (user) {
		userInfo = await fetchUser(user?.id || "");
	}
	const project = await fetchProject(params.slug);

	return (
		<div className="flex flex-col lg:flex-row gap-4 sm:gap-5">
			<Container
				className={`shadow-md dark:shadow-gray-900 w-full ${
					project.completed ? "" : "lg:w-[640px]"
				} flex-grow rounded-xl border`}
				headingText="Project Information"
			>
				<Suspense fallback={<MainPageFallback />}>
					<SinglePageProject
						userType={userInfo.user_type}
						project={project as IProject}
					/>
				</Suspense>
			</Container>
			<div className="relative flex-grow">
				<div className="shadow-md dark:shadow-gray-900 rounded-xl border w-full p-4">
					<DonateSideBox project={project} />
				</div>
				{/* ------------- volunteers information --------------- */}
				<div className="shadow-md dark:shadow-gray-900 rounded-xl border mt-4 md:mt-5 w-full p-4">
					<AssignedVolunteers slug={project.slug} volunteers={project.volunteers} />
				</div>
			</div>
		</div>
	);
}
