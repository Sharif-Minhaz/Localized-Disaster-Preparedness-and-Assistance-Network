import { DonationActivityCard, HeadingSection, Pagination, Search } from "@/components/shared";
import { getUserDonationHistory } from "@/lib/actions/donation.actions";
import { IDonation } from "@/lib/models/DonationModel";
import { currentUser } from "@clerk/nextjs";

export default async function DonationHistory({
	searchParams,
}: {
	searchParams?: { query: string; page: string };
}) {
	const user = await currentUser();

	if (!user) {
		return <p>Not logged in, login first.</p>;
	}

	const { donations, totalElements } = await getUserDonationHistory({
		clerkId: user.id,
		searchString: searchParams?.query,
		pageNumber: Number(searchParams?.page),
	});

	return (
		<div className="shadow rounded-xl border">
			<HeadingSection text="Donation History" />
			<div className="px-4 py-4 flex flex-col gap-4">
				<Search placeholder="Search history..." />
				{!donations.length && (
					<p className="p-4">
						No donation history available. Donate first to view details here.
					</p>
				)}
				{donations.map((history: IDonation, index: number) => (
					<DonationActivityCard key={index} history={history} />
				))}
			</div>
			<div className="mt-2 mb-5 flex w-full justify-center">
				<Pagination totalPages={Math.ceil(totalElements / 5)} />
			</div>
		</div>
	);
}
