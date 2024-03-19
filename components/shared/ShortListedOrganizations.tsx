import { HeadingSection, ShortListedOrgCards } from "@/components/shared";
import { fetchCommunities } from "@/lib/actions/community.actions";
import { Suspense } from "react";
import MainPageFallback from "./MainPageFallback";

export default async function ShortListedOrganizations() {
	const { communities } = await fetchCommunities({});

	return (
		<div className="shadow-md dark:shadow-gray-900 rounded-xl border">
			<HeadingSection text="Communities" link="/communities" linkText="View All" />
			<Suspense fallback={<MainPageFallback />}>
				<ShortListedOrgCards communities={[...communities].slice(0, 3)} />
			</Suspense>
		</div>
	);
}
