import {
	AboutOrganization,
	ContactAddress,
	ContactLocation,
	HeadingSection,
	TeamSection,
	Volunteers,
} from "@/components/shared";

export default function AboutPage() {
	return (
		<section>
			<div className="shadow-md dark:shadow-gray-900 rounded-xl border mb-4 sm:mb-5">
				<HeadingSection text="About Us" />
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
			</div>
			<section className="shadow-md dark:shadow-gray-900 rounded-xl border mb-4 sm:mb-5">
				<HeadingSection text="Our Team" />
				{/* team member */}
				<TeamSection />
			</section>
			<section className="shadow-md dark:shadow-gray-900 rounded-xl border">
				<HeadingSection text="Our Volunteers" />
				{/* volunteers cards here */}
				<Volunteers />
			</section>
		</section>
	);
}
