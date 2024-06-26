import { CommunityForm, Container } from "@/components/shared";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchCommunities, fetchCommunity } from "@/lib/actions/community.actions";
import { ICommunity } from "@/lib/models/CommunityModel";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Update Community",
};

export async function generateStaticParams() {
	const { communities } = await fetchCommunities({});
	return communities.map((community: ICommunity) => ({ slug: community.slug }));
}

export default async function UpdateCommunityPage({ params }: { params: { slug: string } }) {
	const community = await fetchCommunity(params.slug);
	const user = await currentUser();

	if (!user) {
		return redirect("/");
	}

	return (
		<Container headingText="Update Community">
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<CommunityForm adminId={user.id} community={community} update />
			</div>
		</Container>
	);
}
