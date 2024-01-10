export default function SingleProjectPage({ params }: { params: { slug: string } }) {
	const projectId = params.slug;

	return <div>SingleProjectPage - {projectId}</div>;
}
