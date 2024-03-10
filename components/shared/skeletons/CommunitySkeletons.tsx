import { Skeleton } from "@/components/ui/skeleton";

export default function CommunitySkeletons() {
	return (
		<div className="w-full shadow rounded-xl border">
			<div className="p-4 sm:p-5 border-b-2 border-b-slate-100 dark:border-b-slate-800/90">
				<Skeleton className="h-6 w-[250px]" />
			</div>
			<div className="px-4 sm:px-5 pt-4 sm:pt-5 flex gap-2">
				<Skeleton className="h-10 w-full" />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-5">
				<SingleCommunitySkeleton />
				<SingleCommunitySkeleton />
			</div>
		</div>
	);
}

function SingleCommunitySkeleton() {
	return (
		<article className="border flex w-full max-w-[400px] flex-col overflow-hidden rounded-xl shadow">
			<div className="flex pt-4 px-4 pb-4 gap-3 justify-between items-center dark:bg-slate-900 bg-[#f9f9f9]">
				<div className="flex gap-3 items-center">
					<div>
						<Skeleton className="w-[60px] h-[60px] rounded-full" />
					</div>
					<div>
						<Skeleton className="w-full h-4" />
						<Skeleton className="w-full h-3" />
					</div>
				</div>
				<Skeleton className="h-8 w-[80px]" />
			</div>
			<div className="px-4 space-y-2 mt-3">
				<Skeleton className="w-full h-3" />
				<Skeleton className="w-full h-3" />
				<Skeleton className="w-full h-3" />
				<Skeleton className="w-full h-3" />
				<Skeleton className="w-[70%] h-3" />
			</div>
			<div className="flex items-center justify-between gap-3 px-4 pb-4 mt-3">
				<Skeleton className="w-[100px] h-5" />
			</div>
		</article>
	);
}
