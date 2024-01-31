import {
	Banner,
	Hero,
	ShortListedNews,
	ShortListedOrganizations,
	ShortListedProjects,
	WeatherReport,
} from "@/components/shared";
import { Project } from "@/components/shared/ProjectsList";
import { fetchProjects } from "@/lib/actions/project.actions";

export default async function HomePage() {
	const { projects, isNext } = await fetchProjects({});

	return (
		<section className="flex flex-col gap-5">
			<section>
				<Hero />
			</section>
			<section>
				<ShortListedProjects projects={projects as Project[]} isNext={isNext} />
			</section>
			<section>
				<ShortListedNews />
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
