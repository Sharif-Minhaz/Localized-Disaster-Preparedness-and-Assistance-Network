import Image from "next/image";
import Loader from "../../public/icons/loading.svg";

export default function LoadingScreen({ height, width }: { height?: string; width?: string }) {
	return (
		<div
			className={`relative p-6 ${height} ${width} bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700`}
		>
			<div
				role="status"
				className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
			>
				<div className="flex h-full items-center justify-center">
					<Image unoptimized src={Loader} alt="loading..." />
				</div>

				<span className="sr-only">Loading</span>
			</div>
		</div>
	);
}
