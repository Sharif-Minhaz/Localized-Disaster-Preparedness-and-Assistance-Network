import { HeadingSection, Search, ShortListedOrgCards } from "@/components/shared";
import MainPageFallback from "@/components/shared/MainPageFallback";
import { fetchCommunities } from "@/lib/actions/community.actions";
import { Suspense } from "react";

export default async function OrganizationsPage({
	searchParams,
}: {
	searchParams?: {
		query?: string;
	};
}) {
	const { communities, isNext } = await fetchCommunities({ searchString: searchParams?.query });
	const plainData = JSON.parse(JSON.stringify(communities));

	return (
		<div className="shadow rounded-md border">
			<HeadingSection text="Organizations" />
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<Search placeholder="Search organizations..." />
			</div>
			<Suspense fallback={<MainPageFallback />}>
				<ShortListedOrgCards isNext={isNext} communities={plainData} />
			</Suspense>
		</div>
	);
}
