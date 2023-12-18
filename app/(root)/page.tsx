import {
	Banner,
	Hero,
	ShortListedNews,
	ShortListedOrganizations,
	ShortListedProjects,
	WeatherReport,
} from "@/components/shared";

export default async function HomePage() {
	return (
		<section className="flex flex-col gap-5">
			<section>
				<Hero />
			</section>
			<section>
				<ShortListedProjects />
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
