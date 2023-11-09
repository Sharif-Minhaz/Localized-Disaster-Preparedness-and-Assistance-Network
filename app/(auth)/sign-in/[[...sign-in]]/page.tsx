import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<section className="flex justify-center items-center min-h-screen w-full">
			<SignIn />
		</section>
	);
}
