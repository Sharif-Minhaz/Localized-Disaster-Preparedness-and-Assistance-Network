export default function SingleProjectPage({ params }: { params: { id: string } }) {
	const projectId = params.id;

	return <div>SingleProjectPage - {projectId}</div>;
}
