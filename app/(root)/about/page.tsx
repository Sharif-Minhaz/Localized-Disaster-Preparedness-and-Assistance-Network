import {
	AboutOrganization,
	ContactLocation,
	Container,
	TeamSection,
	Volunteers,
} from "@/components/shared";
import { Mail, Phone, Printer } from "lucide-react";

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
						<div className="grid h-full place-content-center font-montserrat bg-[url('/images/pat.png')]">
							<div className="flex flex-col gap-3 items-center">
								<p className="mb-2 text-center">
									45 BC, Akran Bazar at Ashulia, Savar, Dhaka
								</p>
								<p className="flex items-center gap-1.5 sm:text-center border dark:border-slate-700 px-4 py-1.5 rounded-full">
									<Phone size={17} />{" "}
									<span className="text-gray-400">Phone:</span> +91 976885083
								</p>
								<p className="flex items-center gap-1.5 sm:text-center border dark:border-slate-700 px-4 py-1.5 rounded-full">
									<Mail size={17} /> <span className="text-gray-400">Mail:</span>{" "}
									ldpan@gmail.com
								</p>
								<p className="flex items-center gap-1.5 sm:text-center border dark:border-slate-700 px-4 py-1.5 rounded-full">
									<Printer size={17} />{" "}
									<span className="text-gray-400">Fax:</span> +91 9768850839
								</p>
							</div>
						</div>
					</div>
					<ContactLocation />
				</div>
			</Container>
			<Container headingText="Our Team" className="my-5">
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
