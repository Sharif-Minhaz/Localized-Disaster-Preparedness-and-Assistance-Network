import { DonationHistorySkeletons } from "@/components/shared";

export default function Loading() {
	return (
		<div className="w-full flex min-h-screen">
			<DonationHistorySkeletons />
		</div>
	);
}
