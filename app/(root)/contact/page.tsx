import { ContactSection, HeadingSection } from "@/components/shared";

export default function ContactPage() {
	return (
		<section className="shadow rounded-xl border">
			<HeadingSection text="Contact us" />
			<div className="p-5">
				<ContactSection />
			</div>
		</section>
	);
}
