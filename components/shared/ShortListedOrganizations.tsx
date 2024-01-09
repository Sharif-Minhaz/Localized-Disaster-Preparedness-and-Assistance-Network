import { HeadingSection, ShortListedOrgCards } from "@/components/shared";
import { fetchCommunities } from "@/lib/actions/community.actions";
import { Suspense } from "react";
import MainPageFallback from "./MainPageFallback";

export default async function ShortListedOrganizations() {
	const { communities, isNext } = await fetchCommunities({});
	console.log(communities);
	return (
		<div className="shadow rounded-md border">
			<HeadingSection text="Organizations" link="/organizations" linkText="View All" />
			<Suspense fallback={<MainPageFallback />}>
				{/* @ts-ignore */}
				<ShortListedOrgCards isNext={isNext} communities={communities} />
			</Suspense>
		</div>
	);
}
