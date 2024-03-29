import {
	Container,
	SingleApplication,
	VolunteerApplications,
	VolunteerForm,
} from "@/components/shared";
import { fetchApplication } from "@/lib/actions/application.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Voluntary",
};

export default async function VoluntaryPage() {
	const user = await currentUser();

	if (!user) {
		return redirect("/");
	}

	const userInfo = await fetchUser(user?.id);
	const applicationInfo = await fetchApplication(userInfo._id);

	return (
		<Container headingText="Voluntary">
			<div className="p-4">
				{userInfo.user_type === "admin" && <VolunteerApplications />}
				{userInfo.user_type === "user" && !applicationInfo && <VolunteerForm />}
				{applicationInfo && (
					<div className="flex flex-col gap-4">
						<SingleApplication disabledActions application={applicationInfo} />
					</div>
				)}
				{applicationInfo?.status === "rejected" && (
					<p className="shadow p-4 mt-5 bg-red-100 text-red-400 border rounded-xl">
						Sorry your request has been declined by admin, check your mail for more
						information.
					</p>
				)}
				{userInfo.user_type === "volunteer" && (
					<p className="shadow p-4 mt-5 bg-green-100 text-green-400 border rounded-xl">
						You are already selected as a volunteer in LDPAN platform.
					</p>
				)}
			</div>
		</Container>
	);
}
