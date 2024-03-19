"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
	const router = useRouter();

	return (
		<Button
			className="shadow-md dark:shadow-gray-900"
			type="button"
			variant="outline"
			onClick={() => router.back()}
		>
			<ArrowLeft size={17} className="mr-2" /> Back
		</Button>
	);
}
