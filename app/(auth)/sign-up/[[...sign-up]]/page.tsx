import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<section className="min-h-screen w-full flex justify-center items-center py-6">
			<SignUp />
		</section>
	);
}
