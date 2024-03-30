import { LoadingScreen } from "@/components/shared";

export default function Loading() {
	return (
		<div className="w-full flex-grow flex items-center justify-center h-screen">
			<LoadingScreen height="h-screen" width="w-full" />
		</div>
	);
}
