import { Container, ProjectForm } from "@/components/shared";
import { fetchProject, fetchProjects } from "@/lib/actions/project.actions";
import { getAllVolunteers } from "@/lib/actions/user.actions";
import { IProject } from "@/lib/models/ProjectModel";
import { IUser } from "@/lib/models/UserModel";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Update Project",
};

export async function generateStaticParams() {
	const { projects } = await fetchProjects({});
	return projects.map((project: IProject) => ({ slug: project.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
	const [project, volunteers] = await Promise.all([
		fetchProject(params.slug),
		getAllVolunteers(),
	]);

	if (!project) {
		throw new Error("Project not found!");
	}

	const selectedVolunteers = project.volunteers?.map((volunteer: IUser) => ({
		label: volunteer.name,
		value: volunteer._id,
	}));

	// const getBeginningTime = new Date() > new Date(volunteers.createdAt);

	return (
		<Container headingText="Update Project">
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<ProjectForm
					project={project}
					selectedVolunteers={selectedVolunteers}
					volunteers={volunteers}
					update
				/>
			</div>
		</Container>
	);
}
