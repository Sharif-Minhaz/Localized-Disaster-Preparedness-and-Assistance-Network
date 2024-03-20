import { Mail, Phone, Printer } from "lucide-react";

export default function ContactAddress() {
	return (
		<div className="space-y-1">
			<p className="mb-2 text-sm">45 BC, Akran Bazar at Ashulia, Savar, Dhaka</p>
			<p className="flex items-center gap-1.5">
				<Phone size={17} /> <span className="text-gray-700">Phone :</span> +91 976885083
			</p>
			<p className="flex items-center gap-1.5">
				<Mail size={17} /> <span className="text-gray-700">Email :</span> ldpan@gmail.com
			</p>
			<p className="flex items-center gap-1.5">
				<Printer size={17} /> <span className="text-gray-700">Fax :</span> +91 9768850839
			</p>
		</div>
	);
}
