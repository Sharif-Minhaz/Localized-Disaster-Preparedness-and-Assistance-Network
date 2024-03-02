import { Footer, Navbar, Sidebar } from "@/components/shared";
import { currentUser } from "@clerk/nextjs";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const user = await currentUser();

	let userInfo = {};

	if (user) {
		userInfo = {
			imageUrl: user?.imageUrl,
			username: user?.username,
			createdAt: user?.createdAt,
		};
	}

	return (
		<div>
			<Sidebar userInfo={userInfo} />
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
