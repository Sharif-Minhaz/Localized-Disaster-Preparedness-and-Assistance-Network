import { fetchAllApplications } from "@/lib/actions/application.actions";
import { IApplication } from "@/lib/models/ApplicationModel";
import { SingleApplication } from ".";

export default async function VolunteerApplications() {
	const applications: IApplication[] = await fetchAllApplications();
	return (
		<div className="flex flex-col gap-4">
			{applications.map((application) => (
				<SingleApplication key={application._id} application={application} />
			))}
			{applications.length === 0 && <p className="p-4">No application available yet.</p>}
		</div>
	);
}
