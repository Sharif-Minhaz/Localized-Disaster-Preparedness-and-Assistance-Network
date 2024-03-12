import { Skeleton } from "@/components/ui/skeleton";

export default function GallerySkeletons() {
	return (
		<div className="w-full shadow rounded-xl border">
			<div className="p-4 sm:p-5 border-b-2 border-b-slate-100 dark:border-b-slate-800/90">
				<Skeleton className="h-6 w-[250px]" />
			</div>
			<div className="p-5">
				<Skeleton className="h-[250px] sm:h-[350px] md:h-[450px] w-full rounded-xl" />
			</div>
		</div>
	);
}
