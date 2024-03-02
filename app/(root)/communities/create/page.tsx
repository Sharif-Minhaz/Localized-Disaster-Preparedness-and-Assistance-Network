import { HeadingSection, CommunityForm } from "@/components/shared";

export default function CreateCommunityPage() {
	return (
		<div className="shadow rounded-xl border">
			<HeadingSection text="Create New Community" />
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<CommunityForm />
			</div>
		</div>
	);
}
