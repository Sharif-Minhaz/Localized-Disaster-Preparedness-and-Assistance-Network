import { ICommunity } from "@/lib/models/CommunityModel";
import Image from "next/image";
import { Button } from "../ui/button";
import { Pencil, Plus, Users } from "lucide-react";
import Link from "next/link";
import { Posts } from ".";

export default function CommunityPage({ community }: { community: ICommunity }) {
	return (
		<>
			<section className="shadow rounded-xl border">
				<div className="relative bg-[url('/assets/images/group-cover.jpg')] bg-cover w-full h-[250px] rounded-t-xl">
					<Image
						src={community.image || "/dummy.png"}
						alt="image"
						width={140}
						height={140}
						className="rounded-full border-white border-[5px] absolute -bottom-[50px] left-1/2 -translate-x-1/2"
					/>
				</div>
				<div className="mt-14 mb-5 text-center">
					<h2 className="text-2xl font-bold">{community.name}</h2>
					<p className="text-sm">
						{community.members.length} member{community.members.length > 1 ? "s" : ""}
					</p>
					<div className="flex gap-2 justify-center mt-4">
						<Button className="flex gap-2 rounded-lg">
							<Users size={15} />
							Join community
						</Button>
						<Link href={`/communities/${community.slug}/update`}>
							<Button className="flex gap-2 rounded-lg bg-slate-200 hover:bg-[#d8dadf] text-[#1c1e21]">
								<Pencil size={15} />
								Edit community
							</Button>
						</Link>
					</div>
				</div>
				<hr />
				<p className="text-center py-4 px-4 sm:px-8 md:px-16 text-sm">{community.bio}</p>
			</section>
			<section className="shadow rounded-xl border mt-5 max-w-3xl mx-auto">
				<Posts />
			</section>
			<Link href={`/communities/${community.slug}/post/create`}>
				<div className="bg-blue-600 text-white shadow w-14 h-14 rounded-full fixed z-10 bottom-4 right-4 flex justify-center items-center">
					<Plus />
				</div>
			</Link>
		</>
	);
}
