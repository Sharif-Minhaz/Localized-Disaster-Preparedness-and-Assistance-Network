import { Suspense } from "react";
import { fetchProject, fetchProjects } from "@/lib/actions/project.actions";
import MainPageFallback from "@/components/shared/MainPageFallback";
import { SinglePageProject, HeadingSection, DonateSideBox } from "@/components/shared";
import { IProject } from "@/lib/models/ProjectModel";

export async function generateStaticParams() {
	const { projects } = await fetchProjects({});
	return projects.map((project: IProject) => ({ slug: project.slug }));
}

export default async function SingleProjectPage({ params }: { params: { slug: string } }) {
	const project = await fetchProject(params.slug);

	return (
		<div className="flex flex-col lg:flex-row gap-4 sm:gap-5">
			<div
				className={`shadow w-full ${
					project.completed ? "" : "lg:w-[640px]"
				} flex-grow rounded-xl border`}
			>
				<HeadingSection text="Project Information" />
				<Suspense fallback={<MainPageFallback />}>
					<SinglePageProject project={project as IProject} />
				</Suspense>
			</div>
			<div className="relative flex-grow">
				<div className="shadow rounded-xl border w-full p-4">
					<DonateSideBox project={project} />
				</div>
			</div>
		</div>
	);
}
