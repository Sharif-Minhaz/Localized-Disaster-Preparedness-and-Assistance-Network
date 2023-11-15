import { Navbar } from "@/components/shared";
import { fetchCommunities } from "@/lib/actions/community.actions";

export default async function HomePage() {
	const { communities, isNext } = await fetchCommunities({});

	return (
		<div>
			<Navbar />
			<p>Home start</p>

			{communities?.map((community) => (
				<div className="border border-slate-500 p-2" key={community._id}>
					{community.name}
					<p>{community.bio}</p>
				</div>
			))}
		</div>
	);
}
