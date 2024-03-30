import { Skeleton } from "@/components/ui/skeleton";

export default function AuditReportSkeletons() {
	return (
		<div className="w-full shadow rounded-xl border">
			<div className="p-4 sm:p-5 border-b-2 border-b-slate-100 dark:border-b-slate-800/90">
				<Skeleton className="h-6 w-[250px]" />
			</div>
			<div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
				<SingleReportSkeleton />
				<SingleReportSkeleton />
				<SingleReportSkeleton />
				<SingleReportSkeleton />
			</div>
		</div>
	);
}

function SingleReportSkeleton() {
	return (
		<div className="border flex w-full flex-col">
			<div className="flex gap-4 justify-end px-4 py-5">
				<Skeleton className="w-6 h-6 rounded-lg" />
				<Skeleton className="w-6 h-6 rounded-lg" />
				<Skeleton className="w-6 h-6 rounded-lg" />
			</div>
			<div className="px-3 mb-3">
				<Skeleton className="w-full h-[300px]" />
			</div>
			<div className="p-3 border-t">
				<Skeleton className="w-full h-3 mb-2" />
				<Skeleton className="w-3/4 h-3" />
			</div>
		</div>
	);
}
