import { HeadingSection, ProjectsList, Search } from "@/components/shared";
import MainPageFallback from "@/components/shared/MainPageFallback";
import { Suspense } from "react";
import { demoProjectsList } from "@/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function Projects() {
	return (
		<div className="shadow rounded-md border">
			<HeadingSection text="Projects" />
			<div className="px-4 sm:px-5 pt-4 sm:pt-5 flex gap-2">
				<Search placeholder="Search projects..." />
				<Link href="/projects/create">
					<Button>
						<Plus />
					</Button>
				</Link>
			</div>
			<Suspense fallback={<MainPageFallback />}>
				<ProjectsList projects={demoProjectsList} />
			</Suspense>
		</div>
	);
}
