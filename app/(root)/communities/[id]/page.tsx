import { fetchCommunities } from "@/lib/actions/community.actions";
import { ICommunity } from "@/lib/models/CommunityModel";

export async function generateStaticParams() {
	const { communities } = await fetchCommunities({ searchString: "" });
	return communities.map((community: ICommunity) => ({ id: community.id }));
}

export default function SingleOrganizationPage({ params }: { params: { id: string } }) {
	return <div>SingleOrganizationPage for {params.id}</div>;
}
