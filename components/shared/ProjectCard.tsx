import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { deleteProject } from "@/lib/actions/project.actions";
import { DeleteProjectCom } from "@/components/shared";

interface Props {
	heading: string;
	description: string;
	image: string;
	slug: string;
	completed: boolean;
}

export default function ProjectCard({ heading, description, image, slug, completed }: Props) {
	const deleteProjectWithSlug = deleteProject.bind(null, slug);

	return (
		<article className="group relative flex min-h-[300px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl border shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
			<div className="h-[170px] w-full relative">
				<Image
					src={image}
					draggable={false}
					className="rounded-t-lg object-cover"
					alt="disaster news"
					fill
					quality={100}
					sizes="100vw"
				/>
				<div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
					<Link href={`/projects/${slug}/update`}>
						<Pencil className="text-purple-400 w-5 h-5" />
					</Link>
					<DeleteProjectCom action={deleteProjectWithSlug} />
				</div>
			</div>
			<div className="flex min-h-[200px] flex-col gap-3 p-4 md:gap-3">
				<h2 className="text-[16px] dark:text-white font-medium leading-[24px] line-clamp-2 flex-1 text-black">
					{heading}
				</h2>
				{!completed && (
					<div className="flex gap-2">
						<span className="text-[12px] font-semibold leading-[20px] w-min rounded-full bg-green-100 px-4 py-1 text-green-500">
							OPEN
						</span>
						<p className="text-[12px] font-semibold leading-[20px] w-min rounded-full bg-gray-200 px-4 py-1 text-gray-500 line-clamp-1">
							DONATABLE
						</p>
					</div>
				)}
				<p className="text-grey-600 dark:text-slate-200 text-sm py-1 line-clamp-4">
					{description}
				</p>
				<div className="mt-2">
					<Link href={`/projects/${slug}`}>
						<p className="inline-flex gap-1 text-[14px] items-center">
							<span>More Info...</span>
							<ChevronRight size={14} color="black" />
						</p>
					</Link>
				</div>
			</div>
		</article>
	);
}
