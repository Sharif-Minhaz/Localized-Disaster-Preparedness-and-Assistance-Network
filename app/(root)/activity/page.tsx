import { ActivityList, HeadingSection, Search } from "@/components/shared";
import { getDonationActivity } from "@/lib/actions/donation.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { IDonation } from "@/lib/models/DonationModel";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DonationActivity({
	searchParams,
}: {
	searchParams?: { query: string };
}) {
	const user = await currentUser();

	if (!user) {
		return <p>Not logged in, login first.</p>;
	}

	const userInfo = await fetchUser(user.id);

	if (userInfo.user_type !== "admin") return redirect("/");

	const { donations, isNext } = await getDonationActivity({
		searchString: searchParams?.query || "",
	});

	return (
		<div className="shadow rounded-xl border">
			<HeadingSection text="Donation Activity" />
			<div className="px-4 py-4 flex flex-col gap-4">
				<Search placeholder="Search activity..." />
				<ActivityList donations={donations as IDonation[]} isNext={isNext} />
			</div>
		</div>
	);
}
