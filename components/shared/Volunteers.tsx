import { getAllVolunteers } from "@/lib/actions/user.actions";
import { VolunteerCard } from ".";
import { IUser } from "@/lib/models/UserModel";

export default async function Volunteers() {
	const volunteers: IUser[] | [] = await getAllVolunteers();

	if (!volunteers.length) return <p className="p-4">Currently no volunteers available.</p>;
	return (
		<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 p-4 sm:p-5">
			{volunteers.map((volunteer) => (
				<VolunteerCard key={volunteer._id} volunteer={volunteer} />
			))}
		</div>
	);
}
