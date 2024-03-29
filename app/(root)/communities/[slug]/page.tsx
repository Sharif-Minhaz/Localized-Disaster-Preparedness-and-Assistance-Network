import { CommunityPage } from "@/components/shared";
import { fetchCommunities, fetchCommunity } from "@/lib/actions/community.actions";
import { ICommunity } from "@/lib/models/CommunityModel";

export async function generateMetadata({ params }: { params: { slug: string } }) {
	return {
		title: params.slug,
	};
}

export async function generateStaticParams() {
	const { communities } = await fetchCommunities({});
	return communities.map((community: ICommunity) => ({ slug: community.slug }));
}

export default async function SingleOrganizationPage({ params }: { params: { slug: string } }) {
	const community = await fetchCommunity(params.slug);

	return <CommunityPage community={community} />;
}
