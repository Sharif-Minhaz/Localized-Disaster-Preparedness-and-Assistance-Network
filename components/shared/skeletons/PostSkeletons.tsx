import { Skeleton } from "@/components/ui/skeleton";

export default function PostSkeletons() {
	return (
		<div className="w-full shadow rounded-xl border">
			<div className="p-4 sm:p-5 border-b-2 border-b-slate-100 dark:border-b-slate-800/90">
				<Skeleton className="h-6 w-[250px]" />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-5">
				<SinglePostSkeleton />
				<SinglePostSkeleton />
			</div>
		</div>
	);
}

function SinglePostSkeleton() {
	return (
		<article className="border flex w-full max-w-[400px] flex-col overflow-hidden rounded-xl shadow">
			<div>
				<Skeleton className="w-full h-[150px] rounded-t-xl" />
			</div>
			<div className="px-4 mt-3 flex gap-3 items-center">
				<div>
					<Skeleton className="w-[60px] h-[60px] rounded-full" />
				</div>
				<div className="space-y-2">
					<Skeleton className="w-[100px] h-4" />
					<Skeleton className="w-[110px] h-3" />
				</div>
			</div>
			<div className="px-4 space-y-2 mt-3">
				<Skeleton className="w-full h-3" />
				<Skeleton className="w-full h-3" />
				<Skeleton className="w-[70%] h-3" />
			</div>
			<div className="flex items-center gap-3 px-4 pb-4 mt-3">
				<Skeleton className="w-[30px] h-[30px]" />
				<Skeleton className="w-[30px] h-[30px]" />
			</div>
		</article>
	);
}
