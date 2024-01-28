import { ProjectForm } from "@/components/shared";
import { fetchProject } from "@/lib/actions/project.actions";
import { HeadingSection } from "@/components/shared";

export default async function Page({ params }: { params: { slug: string } }) {
	const project = await fetchProject(params.slug);
	const plainData = JSON.parse(JSON.stringify(project));

	return (
		<div className="shadow rounded-md border">
			<HeadingSection text="Update Project" />
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<ProjectForm project={plainData} update />
			</div>
		</div>
	);
}
