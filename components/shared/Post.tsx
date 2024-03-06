"use client";

import { IPost } from "@/lib/models/PostModel";
import Image from "next/image";
import { Author, Like } from ".";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight, MessageCircle } from "lucide-react";

export default function Post({ post }: { post: IPost }) {
	const params = useParams<{ slug: string }>();

	return (
		<article className="border shadow-md rounded-xl">
			<div className="h-[170px] w-full relative">
				<Image
					fill
					className="rounded-t-xl object-cover"
					src={post.image || "/dummy.png"}
					alt="post image"
				/>
			</div>
			<div className="p-3">
				<Author imgSize={40} userInfo={post.createdBy} creationDate={post.createdAt} />
			</div>
			<p className="px-3 line-clamp-2 text-sm">{post.description}</p>
			<div className="p-3 flex border-t justify-between items-center mt-5">
				<div className="flex gap-2">
					{/* -------- like post --------- */}
					<Like />
					<Link href={`/communities/${params.slug}/post/${post._id}`}>
						<MessageCircle color="#1c274c" size={24} />
					</Link>
				</div>
				<span className="text-sm">
					<Link
						className="inline-flex gap-1 items-center"
						href={`/communities/${params.slug}/post/${post._id}`}
					>
						Read more <ChevronRight size={18} />
					</Link>
				</span>
			</div>
		</article>
	);
}
