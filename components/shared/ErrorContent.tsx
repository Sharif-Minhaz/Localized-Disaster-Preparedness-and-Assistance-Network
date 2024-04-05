import { RefreshCcw } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function ErrorContent({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const router = useRouter();

	return (
		<div className="flex h-screen flex-col items-center justify-center p-5">
			<h2 className="text-center text-3xl font-semibold mb-3">Something went wrong!</h2>
			<h3 className="text-sm text-center max-w-[500px]">Reason: {error?.message}</h3>
			<div className="flex gap-4 justify-center mt-5 items-center">
				<Button
					className="rounded-lg text-sm"
					onClick={
						// Attempt to recover by trying to re-render the invoices route
						() => reset()
					}
				>
					Try again
				</Button>
				<Button
					className="rounded-lg border text-sm"
					type="button"
					variant="secondary"
					onClick={() => router.refresh()}
				>
					<RefreshCcw size={17} className="mr-2" /> Refresh
				</Button>
			</div>
		</div>
	);
}
