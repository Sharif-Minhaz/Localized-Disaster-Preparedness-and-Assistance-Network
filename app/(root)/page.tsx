import {
	Banner,
	Hero,
	ShortListedOrganizations,
	ShortListedProjects,
	WeatherReport,
} from "@/components/shared";
import { fetchProjects } from "@/lib/actions/project.actions";
import { IProject } from "@/lib/models/ProjectModel";

export default async function HomePage() {
	const { projects, isNext } = await fetchProjects({});

	return (
		<section className="flex flex-col gap-5">
			<section>
				<Hero />
			</section>
			<section>
				<ShortListedProjects projects={projects as IProject[]} isNext={isNext} />
			</section>
			<section className="py-3">
				<Banner />
			</section>
			<section>
				<WeatherReport />
			</section>
			<section>
				<ShortListedOrganizations />
			</section>
		</section>
	);
}
