import { SinglePageProject, HeadingSection, DonateSideBox } from "@/components/shared";
import { fetchProject } from "@/lib/actions/project.actions";
import { Suspense } from "react";
import MainPageFallback from "@/components/shared/MainPageFallback";

export default async function SingleProjectPage({ params }: { params: { slug: string } }) {
	const project = await fetchProject(params.slug);

	return (
		<div>
			<div className="shadow rounded-md border">
				<HeadingSection text="Single Project Information" />
				<Suspense fallback={<MainPageFallback />}>
					<SinglePageProject project={project} />
				</Suspense>
			</div>
			<div className="w-[350px] relative">
				<DonateSideBox />
			</div>
		</div>
	);
}
