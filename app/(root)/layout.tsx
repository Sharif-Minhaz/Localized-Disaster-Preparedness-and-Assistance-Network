import { Footer, Navbar, SidebarHOC } from "@/components/shared";
import { Suspense } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Suspense fallback={<p className="p-5">Loading...</p>}>
				<SidebarHOC />
			</Suspense>
			<main className="ml-0 lg:ml-[255px]">
				<Navbar />
				<div className="sm:p-5 sm:pb-0 p-4 pb-0">
					{children}
					<section className="mt-8">
						<Footer />
					</section>
				</div>
			</main>
		</div>
	);
}
