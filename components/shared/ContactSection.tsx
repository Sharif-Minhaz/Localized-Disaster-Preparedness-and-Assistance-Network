import { Mail, Phone, Printer } from "lucide-react";
import { ContactForm, ContactLocation } from ".";

export default function ContactSection() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
			<ContactLocation />
			<div className="border shadow rounded-xl p-4">
				<div className="space-y-1">
					<p className="mb-2 text-sm">
						45 BC, a Latin professor at Hampden-Sydney College in Mexico
					</p>
					<p className="flex items-center gap-1.5">
						<Phone size={17} /> <span className="text-gray-500">Phone :</span> +91
						976885083
					</p>
					<p className="flex items-center gap-1.5">
						<Mail size={17} /> <span className="text-gray-500">Email :</span>{" "}
						ldpan@gmail.com
					</p>
					<p className="flex items-center gap-1.5">
						<Printer size={17} /> <span className="text-gray-500">Fax :</span> +91
						9768850839
					</p>
				</div>
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
