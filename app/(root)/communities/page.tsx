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

	return (
		<div className="shadow rounded-xl border">
			<HeadingSection text="Communities" />
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<Search placeholder="Search communities..." />
			</div>
			<Suspense fallback={<MainPageFallback />}>
				<ShortListedOrgCards isNext={isNext} communities={communities} />
			</Suspense>
		</div>
	);
}
