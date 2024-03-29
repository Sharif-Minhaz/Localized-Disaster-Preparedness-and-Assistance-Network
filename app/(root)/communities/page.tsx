import { Container, Pagination, Search, ShortListedOrgCards } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { fetchCommunities } from "@/lib/actions/community.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Communities",
};

export default async function OrganizationsPage({
	searchParams,
}: {
	searchParams?: {
		query?: string;
	};
}) {
	const user = await currentUser();
	const userInfo = await fetchUser(user?.id || "");
	const { communities, totalElements } = await fetchCommunities({
		searchString: searchParams?.query,
	});

	return (
		<Container headingText="Communities">
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
			<ShortListedOrgCards userInfo={userInfo} communities={communities} />
			<div className="mt-2 mb-5 flex w-full justify-center">
				<Pagination totalPages={Math.ceil(totalElements / 6)} />
			</div>
		</Container>
	);
}
