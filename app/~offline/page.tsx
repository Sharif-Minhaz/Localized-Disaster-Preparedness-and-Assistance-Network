import { Button } from "@/components/ui/button";
import { WifiOff } from "lucide-react";
import Link from "next/link";

export default function OfflinePage() {
	return (
		<div className="flex h-screen flex-col items-center justify-center p-5">
			<div className="text-center text-xl mb-4 text-slate-800 dark:text-slate-200">
				<WifiOff size={50} />
			</div>
			<h2 className="text-center text-3xl font-semibold mb-3">
				Oops! Internet connection is lost
			</h2>
			<h3 className="text-sm text-center max-w-[500px]">
				Check your internet connection or network settings and try again
			</h3>
			<div className="flex gap-4 justify-center mt-5 items-center">
				<Link href="/">
					<Button className="rounded-lg text-sm">Try again</Button>
				</Link>
			</div>
		</div>
	);
}
