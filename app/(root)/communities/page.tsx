import { HeadingSection, Search, ShortListedOrgCards } from "@/components/shared";
import MainPageFallback from "@/components/shared/MainPageFallback";
import { Button } from "@/components/ui/button";
import { fetchCommunities } from "@/lib/actions/community.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function OrganizationsPage({
	searchParams,
}: {
	searchParams?: {
		query?: string;
	};
}) {
	const user = await currentUser();
	const userInfo = await fetchUser(user?.id || "");
	const { communities, isNext } = await fetchCommunities({ searchString: searchParams?.query });

	return (
		<section className="shadow rounded-xl border">
			<HeadingSection text="Communities" />
			<div className="px-4 sm:px-5 pt-4 sm:pt-5 flex gap-2">
				<Search placeholder="Search communities..." />
				{userInfo.user_type === "admin" ||
					(userInfo.user_type === "volunteer" && (
						<Link href="/communities/create">
							<Button>
								<Plus />
							</Button>
						</Link>
					))}
			</div>
			<Suspense fallback={<MainPageFallback />}>
				<ShortListedOrgCards
					userInfo={userInfo}
					isNext={isNext}
					communities={communities}
				/>
			</Suspense>
		</section>
	);
}
