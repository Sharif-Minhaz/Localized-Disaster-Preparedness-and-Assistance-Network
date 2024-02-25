import { LoadingScreen } from "@/components/shared";

export default function Loading() {
	return (
		<div className="w-full flex items-center justify-center h-screen">
			<LoadingScreen height="h-[calc(100vh-100px)]" width="w-full" />
		</div>
	);
}
