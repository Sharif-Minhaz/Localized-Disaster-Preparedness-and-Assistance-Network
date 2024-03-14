import {
	AdminCards,
	DonationActivityPieChart,
	DonationBarChart,
	HeadingSection,
} from "@/components/shared";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function ResourcesPage() {
	const user = await currentUser();

	if (!user) {
		return <p>Not logged in, login first.</p>;
	}

	const userInfo = await fetchUser(user.id);

	if (userInfo.user_type !== "admin") return redirect("/");

	return (
		<section className="shadow rounded-xl border">
			<HeadingSection text="Dashboard" />
			<div className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
				<div className="col-span-2">
					<DonationBarChart />
				</div>
				<div className="col-span-1 h-full shadow p-4 border rounded-xl">
					<DonationActivityPieChart />
				</div>
			</div>
			<div className="border-b" />
			<div className="p-5">
				<AdminCards />
			</div>
		</section>
	);
}
