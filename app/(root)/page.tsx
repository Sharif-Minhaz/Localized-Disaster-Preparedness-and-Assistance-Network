import { Navbar } from "@/components/shared";
import { currentUser } from "@clerk/nextjs";

export default async function HomePage() {
	const user = await currentUser();

	console.log(user);

	return (
		<div>
			<Navbar />
			<p>Home start</p>
		</div>
	);
}
