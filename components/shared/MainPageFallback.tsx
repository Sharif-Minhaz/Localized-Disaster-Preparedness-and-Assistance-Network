import LoadingScreen from "./LoadingScreen";

export default function MainPageFallback() {
	return (
		<div className="w-full flex items-center justify-center h-screen">
			<LoadingScreen />
		</div>
	);
}
