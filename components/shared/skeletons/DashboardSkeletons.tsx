import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSkeletons() {
	return (
		<div className="w-full shadow rounded-xl border">
			<div className="p-4 sm:p-5 border-b-2 border-b-slate-100 dark:border-b-slate-800/90">
				<Skeleton className="h-6 w-[250px]" />
			</div>
			<div className="p-5">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
					<Skeleton className="h-[180px] w-full rounded-xl" />
					<Skeleton className="h-[180px] w-full rounded-xl" />
					<Skeleton className="h-[180px] w-full rounded-xl" />
				</div>
			</div>
			<div className="border-b shadow-md dark:shadow-gray-900" />
			<div className="p-5 grid grid-cols-1 sm:grid-cols-3 sm:gap-x-4 gap-y-4">
				<div className="col-span-2">
					<Skeleton className="w-full h-[350px]" />
				</div>
				<div className="col-span-1 h-full p-4 border rounded-xl">
					<Skeleton className="w-full h-full" />
				</div>
			</div>
			<div className="border-b" />
			<div className="p-5">
				<Skeleton className="w-full h-[300px]" />
			</div>
		</div>
	);
}
