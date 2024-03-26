import { HeadingSection, MotionDiv, ProjectCard } from "@/components/shared";
import { fetchProjects } from "@/lib/actions/project.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { IUser } from "@/lib/models/UserModel";
import { currentUser } from "@clerk/nextjs";

export default async function ShortListedProjects() {
	const user = await currentUser();
	let userInfo: IUser;
	if (user) {
		userInfo = await fetchUser(user?.id || "");
	}
	const { projects } = await fetchProjects({});

	return (
		<div className="dark:shadow-gray-900 shadow-md rounded-xl border">
			<HeadingSection text="Projects" link="/projects" linkText="View All" />

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-5 ">
				{[...projects].slice(0, 3).map((data, index) => (
					<MotionDiv
						key={data.heading}
						initial={{ opacity: 0, y: -100 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 * (index + 1) }}
					>
						<ProjectCard
							userType={userInfo?.user_type}
							heading={data.heading}
							image={data.image}
							description={data.description}
							slug={data.slug}
							completed={data.completed}
						/>
					</MotionDiv>
				))}
			</div>
		</div>
	);
}
