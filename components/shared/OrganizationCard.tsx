import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { deleteCommunity } from "@/lib/actions/community.actions";
import { Pencil } from "lucide-react";
import { DeleteConfirmationBox } from ".";

interface Props {
	name: string;
	slug: string;
	image?: string;
	bio?: string;
	members: any;
}

export default function OrganizationCard({ name, slug, image, bio, members }: Props) {
	const deleteProjectWithSlug = deleteCommunity.bind(null, slug);
	return (
		<article className="border p-4 relative flex w-full max-w-[400px] flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg">
			<div className="flex gap-3 justify-between items-center">
				<div className="flex gap-4 items-center">
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
						<h3 className="text-lg">{name}</h3>
						<h5 className="text-sm">Visit to join with us</h5>
					</div>
				</div>
				<Link href={`/communities/${slug}`}>
					<Button className="text-sm rounded-xl bg-bluish-inverse h-8">Visit</Button>
				</Link>
			</div>
			<div>
				<p className="line-clamp-4 my-4 text-sm">{bio}</p>
			</div>
			<div className="flex items-center justify-between gap-3">
				<div className="flex gap-2 items-center">
					<p className="text-sm">
						{members.length} member{members.length > 1 ? "s" : ""}
					</p>
					<div className="relative">
						<Image
							src={members[0]?.imageUrl}
							alt="user image"
							width={20}
							height={20}
							className="rounded-full"
						/>
					</div>
				</div>
				<div className="flex gap-2 rounded-xl bg-white shadow px-2 py-1 transition-all">
					<Link href={`/communities/${slug}/update`}>
						<Pencil className="text-purple-400 w-5 h-5" />
					</Link>
					<DeleteConfirmationBox action={deleteProjectWithSlug} />
				</div>
			</div>
		</article>
	);
}
