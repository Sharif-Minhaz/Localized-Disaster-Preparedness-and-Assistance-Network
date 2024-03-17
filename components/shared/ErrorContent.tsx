export default function ErrorContent({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div className="flex h-screen flex-col items-center justify-center p-5">
			<h2 className="text-center text-2xl font-semibold mb-2">Something went wrong!</h2>
			<h3 className="text-sm text-center">Reason: {error?.message}</h3>
			<button
				className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
				onClick={
					// Attempt to recover by trying to re-render the invoices route
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	);
}
