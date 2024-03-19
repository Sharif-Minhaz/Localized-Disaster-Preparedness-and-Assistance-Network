import {
	Banner,
	Hero,
	ShortListedOrganizations,
	ShortListedProjects,
	WeatherReport,
} from "@/components/shared";
import { fetchProjects } from "@/lib/actions/project.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { IProject } from "@/lib/models/ProjectModel";
import { currentUser } from "@clerk/nextjs";

export default async function HomePage() {
	const user = await currentUser();
	let userInfo;
	if (user) {
		userInfo = await fetchUser(user?.id || "");
	}
	const { projects } = await fetchProjects({});

	return (
		<section className="flex flex-col gap-5">
			<section>
				<Hero />
			</section>
			<section>
				<ShortListedProjects
					userType={userInfo?.user_type}
					projects={projects as IProject[]}
				/>
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
