import { Skeleton } from "@/components/ui/skeleton";

export default function GallerySkeletons() {
	return (
		<div className="w-full shadow rounded-xl border">
			<div className="p-4 sm:p-5 border-b-2 border-b-slate-100 dark:border-b-slate-800/90">
				<Skeleton className="h-6 w-[250px]" />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-3">
				<SingleGallery />
				<SingleGallery />
				<SingleGallery />
				<SingleGallery />
				<SingleGallery />
				<SingleGallery />
			</div>
		</div>
	);
}

function SingleGallery() {
	return (
		<article className="flex min-h-[240px] w-full rounded-xl border">
			<Skeleton className="h-[240px] w-full" />
		</article>
	);
}

export function GalleryLoader() {
	return (
		<>
			<SingleGallery />
			<SingleGallery />
			<SingleGallery />
			<SingleGallery />
			<SingleGallery />
			<SingleGallery />
		</>
	);
}
