"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home, FileText } from "lucide-react";

const truncateText = (text: string, maxLength: number) => {
	return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export default function Breadcrumb() {
	const pathname = usePathname();
	const pathSegments = pathname.split("/").filter((segment) => segment !== "");

	return (
		<nav aria-label="Breadcrumb" className="hidden lg:block ml-4">
			<ol className="flex items-center space-x-2 text-sm text-gray-500">
				<li>
					<Link
						href="/"
						className="flex items-center hover:text-gray-700 dark:hover:text-gray-300"
					>
						<Home className="w-4 h-4 mr-1" />
						Home
					</Link>
				</li>
				{pathSegments.map((segment, index) => {
					const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
					const isLast = index === pathSegments.length - 1;
					const truncatedSegment = truncateText(segment, 20);

					return (
						<li key={href} className="flex items-center">
							<ChevronRight className="w-4 h-4 mx-1" />
							{isLast ? (
								<span className="flex items-center font-medium text-gray-900 dark:text-gray-100">
									<FileText className="w-4 h-4 mr-1" />
									{truncatedSegment.charAt(0).toUpperCase() +
										truncatedSegment.slice(1)}
								</span>
							) : (
								<Link
									href={href}
									className="flex items-center hover:text-gray-700 dark:hover:text-gray-300"
								>
									<FileText className="w-4 h-4 mr-1" />
									{truncatedSegment.charAt(0).toUpperCase() +
										truncatedSegment.slice(1)}
								</Link>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
