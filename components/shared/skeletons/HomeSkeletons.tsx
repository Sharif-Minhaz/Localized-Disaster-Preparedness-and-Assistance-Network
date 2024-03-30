import { Skeleton } from "@/components/ui/skeleton";

export default function HomeSkeletons() {
	return (
		<div className="w-full flex flex-col gap-5">
			<div className="w-full shadow rounded-xl border">
				<div className="p-5">
					<Skeleton className="w-full h-[470px] rounded-xl" />
				</div>
			</div>

			{/* shortlisted project */}

			<div className="dark:shadow-gray-900 shadow-md rounded-xl border">
				<div className="p-4 sm:p-5 border-b-2 border-b-slate-100 dark:border-b-slate-800/90">
					<Skeleton className="h-6 w-[250px]" />
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-5 ">
					<ShortListedProject />
					<ShortListedProject />
					<ShortListedProject />
				</div>
			</div>

			<div className="w-full shadow border">
				<Skeleton className="w-full h-[170px]" />
			</div>

			<div className="w-full shadow rounded-xl border">
				<div className="p-4 sm:p-5 border-b-2 border-b-slate-100 dark:border-b-slate-800/90">
					<Skeleton className="h-6 w-[250px]" />
				</div>
				<div className="p-5">
					<Skeleton className="w-full h-[400px] rounded-xl" />
				</div>
			</div>
		</div>
	);
}

function ShortListedProject() {
	return (
		<article className="flex min-h-[300px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl border transition-all md:min-h-[438px]">
			<Skeleton className="h-[170px] w-full" />

			<div className="flex min-h-[200px] flex-col gap-3 p-4 md:gap-3">
				<Skeleton className="h-4 w-full" />

				<div className="font-montserrat flex gap-2">
					<Skeleton className="rounded-full w-[100px] h-5" />
					<Skeleton className="rounded-full w-[100px] h-5" />
				</div>

				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-[120px]" />

				<div className="mt-2">
					<Skeleton className="w-[100px] h-5" />
				</div>
			</div>
		</article>
	);
}
