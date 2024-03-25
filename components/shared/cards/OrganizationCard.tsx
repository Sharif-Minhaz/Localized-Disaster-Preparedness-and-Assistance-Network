import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";
import { deleteCommunity } from "@/lib/actions/community.actions";
import { Pencil } from "lucide-react";
import { CommunityMemberAvatars, DeleteConfirmationBox } from "..";

interface Props {
	isUserCommunityCreator: boolean;
	name: string;
	slug: string;
	image?: string;
	bio?: string;
	members: any;
}

export default function OrganizationCard({
	isUserCommunityCreator,
	name,
	slug,
	image,
	bio,
	members,
}: Props) {
	const deleteProjectWithSlug = deleteCommunity.bind(null, slug);
	return (
		<article className="border relative flex w-full max-w-[400px] flex-col overflow-hidden rounded-xl dark:shadow-gray-900 shadow-md transition-all hover:shadow-lg">
			<div className="flex pt-4 px-4 pb-4 gap-3 border-b justify-between items-center dark:bg-slate-900 bg-[#f9f9f9]">
				<div className="flex gap-3 items-center">
					<div>
						<Image
							src={image || ""}
							alt={name}
							width={60}
							height={60}
							className="rounded-full object-cover"
						/>
					</div>
					<div>
						<h1 className="text-lg line-clamp-1">{name}</h1>
						<p className="text-sm">Visit to join us</p>
					</div>
				</div>
				<Link href={`/communities/${slug}`}>
					<Button className="text-sm shadow-md dark:shadow-gray-900 rounded-lg bg-bluish-inverse h-8">
						Visit
					</Button>
				</Link>
			</div>
			<div className="bg-cover dark:bg-none bg-[url(/images/card-pat.png)]">
				<div className="px-4">
					<p className="line-clamp-4 my-4 text-sm">{bio}</p>
				</div>
				<div className="flex items-center justify-between gap-3 px-4 pb-4">
					<div className="flex gap-2 items-center">
						<p className="text-sm">
							{members.length} member{members.length > 1 ? "s" : ""}
						</p>
						<CommunityMemberAvatars members={members} />
					</div>
					{isUserCommunityCreator && (
						<div className="flex gap-2 rounded-xl bg-white shadow px-2 py-1 transition-all">
							<Link
								aria-label="update the community"
								href={`/communities/${slug}/update`}
							>
								<Pencil className="text-purple-400 w-5 h-5" />
							</Link>
							<DeleteConfirmationBox action={deleteProjectWithSlug} />
						</div>
					)}
				</div>
			</div>
		</article>
	);
}
