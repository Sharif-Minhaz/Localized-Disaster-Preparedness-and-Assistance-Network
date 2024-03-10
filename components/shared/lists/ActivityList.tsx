import { IDonation } from "@/lib/models/DonationModel";
import { DonationActivityCard } from "..";

interface Props {
	donations: IDonation[];
	isNext: boolean;
}

export default function ActivityList({ donations, isNext }: Props) {
	return (
		<>
			{!donations.length && <p className="py-4">No donation activity available.</p>}
			{donations.map((history: IDonation, index: number) => (
				<DonationActivityCard key={index} history={history} />
			))}
		</>
	);
}
