import { IApplication } from "@/lib/models/ApplicationModel";
import Image from "next/image";
import { Button } from "../ui/button";
import { approveApplication, rejectApplication } from "@/lib/actions/application.actions";

export default function SingleApplication({
	disabledActions,
	application,
}: {
	disabledActions?: boolean;
	application: IApplication;
}) {
	const approveApplicationById = approveApplication.bind(null, application._id);
	const rejectApplicationById = rejectApplication.bind(null, application._id);

	return (
		<div className="shadow border rounded-xl p-4 divide-y-2">
			<p className="pb-3">
				<strong>Applicant Name: </strong>
				{application.name}
			</p>
			<p className="py-3">
				<strong>Applicant Motive: </strong>
				{application.why}
			</p>
			<div className="py-3">
				<strong>Applicant support document: </strong>
				<Image
					src={application.documentImg}
					alt="document-image"
					width={215}
					height={100}
					className="object-cover mt-2 rounded-lg"
				/>
			</div>
			<p className="py-3">
				<strong>Current status: </strong>
				{application.status}
			</p>

			{!disabledActions && (
				<div className="pt-3 flex gap-3">
					<form action={approveApplicationById}>
						<Button type="submit">Approve</Button>
					</form>
					<form action={rejectApplicationById}>
						<Button type="submit" variant="destructive">
							Reject
						</Button>
					</form>
				</div>
			)}
		</div>
	);
}
