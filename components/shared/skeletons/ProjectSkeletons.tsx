import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectSkeletons() {
	return (
		<div className="w-full shadow rounded-xl border">
			<div className="p-4 sm:p-5 border-b-2 border-b-slate-100 dark:border-b-slate-800/90">
				<Skeleton className="h-6 w-[250px]" />
			</div>
			<div className="px-4 sm:px-5 pt-4 sm:pt-5 flex gap-2">
				<Skeleton className="h-10 w-full" />
			</div>
			<div className="w-full sm:p-5 p-4 flex flex-col gap-4 sm:gap-5">
				<SingleProjectSkeleton />
				<SingleProjectSkeleton />
			</div>
		</div>
	);
}

function SingleProjectSkeleton() {
	return (
		<article className="p-3 w-full border flex gap-4 sm:flex-row relative flex-col overflow-hidden rounded-xl shadow-md transition-all">
			<div>
				<Skeleton className="w-full sm:w-[300px] h-[290px] sm:h-[175px] rounded-xl" />
			</div>
			<div className="w-full">
				<Skeleton className="w-full h-[20px]" />
				<div className="flex gap-3 mt-3">
					<Skeleton className="w-[85px] h-6" />
					<Skeleton className="w-[85px] h-6" />
				</div>
				<div className="mt-4 space-y-3">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-[80%]" />
				</div>
				<Skeleton className="w-[100px] h-5 mt-3" />
			</div>
		</article>
	);
}
