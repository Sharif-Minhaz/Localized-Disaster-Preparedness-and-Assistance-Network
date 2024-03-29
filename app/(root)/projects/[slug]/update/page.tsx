import { Container, ProjectForm } from "@/components/shared";
import { fetchProject, fetchProjects } from "@/lib/actions/project.actions";
import { IProject } from "@/lib/models/ProjectModel";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Update Project",
};

export async function generateStaticParams() {
	const { projects } = await fetchProjects({});
	return projects.map((project: IProject) => ({ slug: project.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
	const project = await fetchProject(params.slug);

	return (
		<Container headingText="Update Project">
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<ProjectForm project={project} update />
			</div>
		</Container>
	);
}
