import { IUser } from "@/lib/models/UserModel";
import { VolunteerCard } from "@/components/shared";
import { UserPlus } from "lucide-react";
import Link from "next/link";

export default function AssignedVolunteers({
	slug,
	volunteers,
	userType,
}: {
	slug: string;
	volunteers: IUser[];
	userType: string;
}) {
	return (
		<div>
			<h2 className="text-[18px] uppercase flex gap-4 items-center justify-between">
				<span>Assigned volunteers</span>
				{userType === "admin" && (
					<Link href={`/projects/${slug}/update`}>
						<UserPlus size={18} />
					</Link>
				)}
			</h2>
			<div className="border-b border-slate-100 dark:border-slate-700 my-3.5" />
			<div className="grid md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-1 grid-cols-1 gap-4">
				{volunteers.length === 0 ? (
					<p className="p-4 text-slate-400">No volunteers assigned yet.</p>
				) : (
					<>
						{volunteers.map((volunteer) => (
							<VolunteerCard key={volunteer._id} volunteer={volunteer} />
						))}
					</>
				)}
			</div>
		</div>
	);
}
