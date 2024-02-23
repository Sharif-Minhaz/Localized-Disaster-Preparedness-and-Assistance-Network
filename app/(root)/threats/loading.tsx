import { LoadingScreen } from "@/components/shared";

export default function Loading() {
	return (
		<div className="w-full flex items-center justify-center h-[calc(100vh-80px)]">
			<LoadingScreen />
		</div>
	);
}
