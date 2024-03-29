import {
	AdminCards,
	Container,
	DonationActivityPieChart,
	DonationBarChart,
	ResourceTable,
} from "@/components/shared";
import {
	getDashboardBarData,
	getDashboardCardsInfo,
	getDashboardChartData,
	getResourcesData,
} from "@/lib/actions/dashboard.action";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard",
};

export default async function ResourcesPage({ searchParams }: { searchParams: { query: string } }) {
	const user = await currentUser();

	if (!user) {
		return <p>Not logged in, login first.</p>;
	}

	const userInfo = await fetchUser(user.id);

	if (userInfo.user_type !== "admin") return redirect("/");

	const [
		donationBarData,
		{ totalMoneyDonation, totalResourceDonation },
		{ totalUsers, totalVolunteers, totalCommunities },
		{ resources, total },
	] = await Promise.all([
		getDashboardBarData(searchParams.query),
		getDashboardChartData(),
		getDashboardCardsInfo(),
		getResourcesData(),
	]);

	return (
		<Container headingText="Dashboard">
			<div className="p-5">
				<AdminCards
					totalUsers={totalUsers}
					totalVolunteers={totalVolunteers}
					totalCommunities={totalCommunities}
				/>
			</div>
			<div className="border-b shadow-md dark:shadow-gray-900" />
			<div className="p-5 grid grid-cols-1 sm:grid-cols-3 sm:gap-x-4 gap-y-4">
				<div className="col-span-2">
					<DonationBarChart donationBarData={donationBarData} />
				</div>
				<div className="col-span-1 h-full shadow-md dark:shadow-gray-900 p-4 border rounded-xl">
					<DonationActivityPieChart
						totalMoneyDonation={totalMoneyDonation}
						totalResourceDonation={totalResourceDonation}
					/>
				</div>
			</div>
			<div className="border-b" />
			<div className="p-5">
				<ResourceTable data={resources} amount={total} />
			</div>
		</Container>
	);
}
