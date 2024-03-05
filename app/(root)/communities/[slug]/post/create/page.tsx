import { HeadingSection, PostForm } from "@/components/shared";
import { fetchCommunities, fetchCommunity } from "@/lib/actions/community.actions";
import { ICommunity } from "@/lib/models/CommunityModel";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
	const { communities } = await fetchCommunities({});
	return communities.map((community: ICommunity) => ({ slug: community.slug }));
}

export default async function CreateCommunityPage({ params }: { params: { slug: string } }) {
	const [user, community] = await Promise.all([currentUser(), fetchCommunity(params.slug)]);

	if (!user || !community) {
		return redirect("/");
	}

	return (
		<div className="shadow rounded-xl border">
			<HeadingSection text="Create Post" />
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<PostForm userId={user.id} communityId={community._id} />
			</div>
		</div>
	);
}
