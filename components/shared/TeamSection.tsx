import { teamData } from "@/constants";
import { TeamCard } from ".";

export default function TeamSection() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-5 gap-4">
			{teamData.map((member) => (
				<TeamCard key={member.id} member={member} />
			))}
		</div>
	);
}
