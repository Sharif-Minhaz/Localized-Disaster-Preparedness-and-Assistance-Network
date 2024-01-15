import SinglePageProject from "@/components/shared/SinglePageProject";
import { fetchProject } from "@/lib/actions/project.actions";

export default async function SingleProjectPage({ params }: { params: { slug: string } }) {
	const project = await fetchProject(params.slug);

	return (
		<div>
			<SinglePageProject project={project} />
		</div>
	);
}
