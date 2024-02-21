import { SinglePageProject, HeadingSection, DonateSideBox } from "@/components/shared";
import { fetchProject } from "@/lib/actions/project.actions";
import { Suspense } from "react";
import MainPageFallback from "@/components/shared/MainPageFallback";
import { Project } from "@/components/shared/ProjectsList";

export default async function SingleProjectPage({ params }: { params: { slug: string } }) {
	const project = await fetchProject(params.slug);

	return (
		<div className="flex gap-4 sm:gap-5">
			<div className="shadow w-[800px] rounded-xl border">
				<HeadingSection text="Single Project Information" />
				<Suspense fallback={<MainPageFallback />}>
					<SinglePageProject project={project as Project} />
				</Suspense>
			</div>
			<div className="relative flex-grow">
				<div className="shadow rounded-xl border w-full p-3">
					<DonateSideBox />
				</div>
			</div>
		</div>
	);
}
