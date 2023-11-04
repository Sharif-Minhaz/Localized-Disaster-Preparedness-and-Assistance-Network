import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<section className="h-screen w-full flex justify-center items-center">
			<SignUp />
		</section>
	);
}
