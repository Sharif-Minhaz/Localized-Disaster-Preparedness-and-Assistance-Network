import { ContactAddress, ContactForm, ContactLocation } from ".";

export default function ContactSection() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
			<ContactLocation />
			<div className="border shadow rounded-xl p-4">
				<ContactAddress />
				<div className="">
					<h3 className="mt-3 text-blue-600">Want to know more? Drop us a mail</h3>
					<div className="border-b mt-3 mb-5" />
					{/* ------------- contact form here ------------ */}
					<ContactForm />
				</div>
			</div>
		</div>
	);
}
