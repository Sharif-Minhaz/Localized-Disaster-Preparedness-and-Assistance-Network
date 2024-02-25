import { DonationActivityCard, HeadingSection } from "@/components/shared";
import { getDonationActivity } from "@/lib/actions/donation.actions";
import { IDonation } from "@/lib/models/DonationModel";
import { currentUser } from "@clerk/nextjs";

export default async function DonationActivity() {
	const user = await currentUser();

	if (!user) {
		return <p>Not logged in, login first.</p>;
	}

	const donations = await getDonationActivity();

	return (
		<div className="shadow rounded-xl border">
			<HeadingSection text="Donation Activity" />
			<div className="px-4 py-4 flex flex-col gap-4">
				{!donations.length && (
					<p className="p-4">No donation activity available. No donation yet.</p>
				)}
				{donations.map((history: IDonation, index: number) => (
					<DonationActivityCard key={index} history={history} />
				))}
			</div>
		</div>
	);
}
