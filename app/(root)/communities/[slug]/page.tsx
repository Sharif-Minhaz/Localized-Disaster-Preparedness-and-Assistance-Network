import { fetchCommunities } from "@/lib/actions/community.actions";
import { ICommunity } from "@/lib/models/CommunityModel";

export async function generateStaticParams() {
	const { communities } = await fetchCommunities({});
	return communities.map((community: ICommunity) => ({ slug: community.slug }));
}

export default function SingleOrganizationPage({ params }: { params: { slug: string } }) {
	return <div>SingleOrganizationPage for {params.slug}</div>;
}
