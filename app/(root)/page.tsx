import { Navbar, Sidebar } from "@/components/shared";

export default async function HomePage() {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<p>Home start</p>
		</div>
	);
}
