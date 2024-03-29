import {
	AboutOrganization,
	ContactAddress,
	ContactLocation,
	Container,
	TeamSection,
	Volunteers,
} from "@/components/shared";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
};

export default function AboutPage() {
	return (
		<section>
			<Container headingText="About us">
				{/* about organization */}
				<AboutOrganization />
				<div className="border-b mt-5 px-5" />
				{/* address information */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 p-4 sm:p-5">
					<div className="border shadow rounded-xl p-4">
						<ContactAddress />
					</div>
					<ContactLocation />
				</div>
			</Container>
			<Container headingText="Our Team">
				{/* team member */}
				<TeamSection />
			</Container>
			<Container headingText="Our Volunteers">
				{/* volunteers cards here */}
				<Volunteers />
			</Container>
		</section>
	);
}
