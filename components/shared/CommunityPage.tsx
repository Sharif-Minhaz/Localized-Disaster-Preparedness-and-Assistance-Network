import { ICommunity } from "@/lib/models/CommunityModel";
import Image from "next/image";
import { Button } from "../ui/button";
import { Pencil, Plus, Users, View } from "lucide-react";
import Link from "next/link";
import { BackButton, CommunityMemberAvatars, HeadingSection, Posts } from ".";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { addMemberToCommunity, removeUserFromCommunity } from "@/lib/actions/community.actions";
import { IUser } from "@/lib/models/UserModel";

export default async function CommunityPage({ community }: { community: ICommunity }) {
	const user = await currentUser();
	if (!user) redirect("/login");
	const userInfo: IUser = await fetchUser(user.id);

	const isAdmin = userInfo.user_type === "admin";
	const isAuthor = userInfo.user_type === "volunteer" && community.createdBy === userInfo._id;
	const alreadyJoined = userInfo.communities.includes(community._id);

	const joinToCommunity = addMemberToCommunity.bind(null, community.slug, user.id);
	const leaveCommunity = removeUserFromCommunity.bind(null, userInfo.clerkId, community.slug);

	return (
		<>
			<section className="shadow-md dark:shadow-gray-900 rounded-xl border">
				<div className="relative bg-[url('/images/group-cover.jpg')] bg-cover w-full h-[250px] rounded-t-xl">
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
					<div className="text-sm flex gap-2 items-center justify-center">
						{community.members.length} member{community.members.length > 1 ? "s" : ""}
						{/* @ts-ignore */}
						<CommunityMemberAvatars members={community.members} />
					</div>
					<div className="flex gap-2 justify-center mt-4">
						{alreadyJoined ? (
							<>
								<form action={leaveCommunity}>
									<Button
										type="submit"
										variant="destructive"
										className="flex gap-2 rounded-lg"
									>
										<Users size={15} />
										<span>
											Leave{" "}
											<span className="sm:inline hidden">community</span>
										</span>
									</Button>
								</form>
								<Link href={`/communities/${community.slug}/post/create`}>
									<Button className="flex gap-2 rounded-lg">
										<Plus size={15} />
										<span>
											Add <span className="sm:inline hidden">post</span>
										</span>
									</Button>
								</Link>
							</>
						) : (
							<>
								<form action={joinToCommunity}>
									<Button type="submit" className="flex gap-2 rounded-lg">
										<Users size={15} />
										<span>
											Join <span className="sm:inline hidden">community</span>
										</span>
									</Button>
								</form>
								<Link href="#posts">
									<Button className="flex gap-2 rounded-lg bg-slate-200 hover:bg-[#d8dadf] text-[#1c1e21]">
										<View size={15} />
										<span>View posts</span>
									</Button>
								</Link>
							</>
						)}

						{/* is the current user is admin or the creator of the community then this action will be visible */}
						{(isAuthor || isAdmin) && (
							<Link
								aria-label="update community"
								href={`/communities/${community.slug}/update`}
							>
								<Button className="flex gap-2 rounded-lg bg-slate-200 hover:bg-[#d8dadf] text-[#1c1e21]">
									<Pencil size={15} />
									<span>
										Edit <span className="sm:inline hidden">community</span>
									</span>
								</Button>
							</Link>
						)}
					</div>
				</div>
				<hr />
				<p className="text-center py-4 px-4 sm:px-8 md:px-16 text-sm">{community.bio}</p>
			</section>
			{/* ----- available posts ----- */}
			<section id="posts" className="shadow rounded-xl border mt-5">
				<HeadingSection text="Available Posts" />
				<Posts clerkId={user.id} communityId={community._id} />
				<div className="p-5">
					<BackButton />
				</div>
			</section>
			{/* ------ create post -------- */}
			{alreadyJoined && (
				<Link href={`/communities/${community.slug}/post/create`}>
					<div className="bg-blue-600 text-white shadow w-14 h-14 rounded-full fixed z-10 bottom-4 right-4 flex justify-center items-center">
						<Plus />
					</div>
				</Link>
			)}
		</>
	);
}
