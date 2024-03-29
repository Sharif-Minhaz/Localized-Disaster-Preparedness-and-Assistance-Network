import { ContactSection, Container } from "@/components/shared";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
};

export default function ContactPage() {
	return (
		<Container headingText="Contact us">
			<div className="p-5">
				<ContactSection />
			</div>
		</Container>
	);
}
