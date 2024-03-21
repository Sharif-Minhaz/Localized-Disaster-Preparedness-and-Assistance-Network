import { LayoutGrid } from "lucide-react";
import Link from "next/link";

interface Props {
	text: string;
	link?: string;
	linkText?: string;
}

export default function HeadingSection({ text, link, linkText }: Props) {
	return (
		<div className="flex items-center justify-between gap-2 p-4 sm:p-5 border-b-2 border-b-slate-100 dark:border-b-slate-800/90">
			<h1 className="font-montserrat font-semibold text-slate-700 dark:text-white text-[22px] uppercase">
				{text}
			</h1>
			{link && (
				<Link href={link}>
					<span className="flex gap-2 items-center text-blue-800 text-[14px]">
						<span>{linkText}</span> <LayoutGrid size={15} />
					</span>
				</Link>
			)}
		</div>
	);
}
