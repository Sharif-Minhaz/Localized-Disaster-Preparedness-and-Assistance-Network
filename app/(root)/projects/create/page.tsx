import { HeadingSection, ProjectForm } from "@/components/shared";

export default function CreateProjectPage() {
	return (
		<div className="shadow rounded-md border">
			<HeadingSection text="Create New Project" />
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<ProjectForm />
			</div>
		</div>
	);
}
