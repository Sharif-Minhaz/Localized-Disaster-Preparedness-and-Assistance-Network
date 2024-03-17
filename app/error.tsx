"use client";

import { ErrorContent } from "@/components/shared";
import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Optionally log the error to an error reporting service
		console.error(error);
	}, [error]);

	return <ErrorContent error={error} reset={reset} />;
}
