import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
	name: string;
	username: string;
	image: string;
	bio: string;
	members: object[];
}

export default function OrganizationCard({ name, username, image, bio, members }: Props) {
	return (
		<article className="border p-4 relative flex w-full max-w-[400px] flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg">
			<div className="flex gap-3 justify-between">
				<div className="flex gap-4">
					<div>
						<Image
							src={image}
							alt={name}
							width={60}
							height={60}
							className="rounded-full object-cover"
						/>
					</div>
					<div>
						<h3 className="text-lg">{name}</h3>
						<p className="text-sm">@{username}</p>
					</div>
				</div>
				<Link href={`/communities/${username}`}>
					<Button className="text-sm bg-bluish-inverse h-8">View</Button>
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
							// @ts-ignore
							src={members[0].imageUrl}
							alt="user"
							width={20}
							height={20}
							className="rounded-full"
						/>
					</div>
				</div>
			</div>
		</article>
	);
}
