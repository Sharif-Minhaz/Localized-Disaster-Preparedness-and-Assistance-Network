import { ActivityList, Container, Pagination, Search } from "@/components/shared";
import { getDonationActivity } from "@/lib/actions/donation.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { IDonation } from "@/lib/models/DonationModel";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Activity",
};

export default async function DonationActivity({
	searchParams,
}: {
	searchParams?: { query: string; page: string };
}) {
	const user = await currentUser();

	if (!user) {
		return <p>Not logged in, login first.</p>;
	}

	const userInfo = await fetchUser(user.id);

	if (userInfo.user_type !== "admin") return redirect("/");

	const { donations, totalElements } = await getDonationActivity({
		searchString: searchParams?.query || "",
		pageNumber: Number(searchParams?.page),
	});

	return (
		<Container headingText="Donation Activity">
			<div className="px-4 py-4 flex flex-col gap-4">
				<Search placeholder="Search activity..." />
				<ActivityList donations={donations as IDonation[]} />
				<div className="mt-5 flex w-full justify-center">
					<Pagination totalPages={Math.ceil(totalElements / 5)} />
				</div>
			</div>
		</Container>
	);
}
