import { Mail, Phone, Printer } from "lucide-react";

export default function ContactAddress() {
	return (
		<div className="grid h-full place-content-center font-montserrat bg-[url('/images/pat.png')]">
			<div className="flex flex-col gap-3 items-center">
				<p className="mb-2 text-center">45 BC, Akran Bazar at Ashulia, Savar, Dhaka</p>
				<p className="flex items-center gap-1.5 sm:text-center border dark:border-slate-700 px-4 py-1.5 rounded-full">
					<Phone size={17} /> <span className="text-gray-400">Phone:</span> +91 976885083
				</p>
				<p className="flex items-center gap-1.5 sm:text-center border dark:border-slate-700 px-4 py-1.5 rounded-full">
					<Mail size={17} /> <span className="text-gray-400">Mail:</span> ldpan@gmail.com
				</p>
				<p className="flex items-center gap-1.5 sm:text-center border dark:border-slate-700 px-4 py-1.5 rounded-full">
					<Printer size={17} /> <span className="text-gray-400">Fax:</span> +91 9768850839
				</p>
			</div>
		</div>
	);
}
