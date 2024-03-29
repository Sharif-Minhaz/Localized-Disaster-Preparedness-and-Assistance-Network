import {
	Banner,
	Hero,
	ShortListedOrganizations,
	ShortListedProjects,
	WeatherReport,
} from "@/components/shared";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home",
};

export default function HomePage() {
	return (
		<section className="flex flex-col gap-5">
			<section>
				<Hero />
			</section>
			<section>
				<ShortListedProjects />
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
