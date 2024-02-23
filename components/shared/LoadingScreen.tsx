export default function LoadingScreen() {
	return (
		<div className="relative p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
			<div
				role="status"
				className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
			>
				<div className="w-36 h-36 border-8 rounded-full border-t-lime-400 animate-spin" />

				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}
