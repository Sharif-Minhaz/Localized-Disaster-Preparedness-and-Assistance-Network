import { DonationForm } from "@/components/shared";

export default function DonateSideBox() {
	return (
		<div>
			<h2 className="text-[20px] uppercase">Donation Form</h2>
			<div className="border-b border-slate-100 dark:border-slate-700 my-3.5" />
			<DonationForm />
		</div>
	);
}
