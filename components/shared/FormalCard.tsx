import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
	heading: string;
	description: string;
	image: string;
}

export default function FormalCard({ heading, description, image }: Props) {
	return (
		<article className="relative border p-4 rounded-lg shadow">
			<div className="h-[170px] w-full relative">
				<Image
					src={image}
					draggable={false}
					className="rounded-t-lg object-cover"
					alt="disaster news"
					fill
				/>
			</div>
			<div>
				<h2 className="text-lg text-slate-800 dark:text-slate-200 py-1.5">{heading}</h2>
				<div className="w-full h-0.5 bg-green-100 dark:bg-slate-700" />
				<p className="text-slate-800 dark:text-slate-200 text-sm py-1 line-clamp-4">
					{description}
				</p>
				<div className="mt-2">
					<Link href="/projects/123">
						<p className="flex gap-1 text-[14px] items-center">
							<span>More Info</span>
							<ChevronRight size={14} color="#4befae" />
						</p>
					</Link>
				</div>
			</div>
		</article>
	);
}
