import { ReactNode } from "react";
import { HeadingSection } from ".";
import { cn } from "@/lib/utils";

interface Props {
	children: ReactNode;
	headingText?: string;
	headingLink?: string;
	headingLinkText?: string;
	className?: string;
	id?: string;
}

export default function Container({
	children,
	headingText,
	headingLink,
	headingLinkText,
	className,
	id,
}: Props) {
	return (
		<section
			id={id}
			className={cn("shadow-md dark:shadow-gray-900 rounded-xl border", className)}
		>
			{headingText && (
				<HeadingSection text={headingText} link={headingLink} linkText={headingLinkText} />
			)}
			{children}
		</section>
	);
}
