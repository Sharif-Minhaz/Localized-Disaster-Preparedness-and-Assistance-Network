import { Skeleton } from "@/components/ui/skeleton";

export default function DonationHistorySkeletons() {
	return (
		<div className="w-full shadow rounded-xl border">
			<div className="p-4 sm:p-5 border-b-2 border-b-slate-100 dark:border-b-slate-800/90">
				<Skeleton className="h-6 w-[250px]" />
			</div>
			<div className="w-full sm:p-5 p-4 flex flex-col gap-4 sm:gap-5">
				<SingleHistorySkeleton />
				<SingleHistorySkeleton />
			</div>
		</div>
	);
}

function SingleHistorySkeleton() {
	return (
		<article className="pr-4 w-full border flex gap-4 sm:flex-row relative flex-col overflow-hidden rounded-xl shadow-md transition-all">
			<div>
				<Skeleton className="w-full sm:w-[190px] h-full rounded-l-xl" />
			</div>
			<div className="w-full py-3">
				<Skeleton className="w-[165px] h-6 mb-3" />
				<Skeleton className="w-[90%] h-5" />
				<div className="mt-4 space-y-3">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-[80%]" />
				</div>
				<div className="flex gap-3 items-center mt-4">
					<div>
						<Skeleton className="w-[60px] h-[60px] rounded-full" />
					</div>
					<div className="space-y-3">
						<Skeleton className="w-[100px] h-4" />
						<Skeleton className="w-[180px] h-3" />
					</div>
				</div>
			</div>
		</article>
	);
}
