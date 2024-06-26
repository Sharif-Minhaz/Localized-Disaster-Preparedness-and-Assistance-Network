import { InfoIcon } from "lucide-react";
import Image from "next/image";
import circleImg from "@/public/images/circle.png";
import { IInfo } from "./AdminCards";

export default function InfoCard({ data }: { data: IInfo }) {
	return (
		<article
			className={`shadow-md dark:shadow-gray-900 dashboard-card overflow-hidden card-img-holder ${data.bg} hover:shadow-[rgba(0,0,0,0.16)_0px_3px_8px]`}
		>
			<Image
				draggable={false}
				src={circleImg}
				className="card-img-absolute"
				alt="circle-image"
			/>
			<p className="flex text-[18px] justify-between items-center mb-1">
				{data.title} <data.icon size={30} />
			</p>
			<p className="text-[28px] mb-3 font-[500]">{data.count}</p>
			<p className="text-[15px] font-[cursive] flex items-center gap-1">
				<InfoIcon size={18} />
				{data.des}
			</p>
		</article>
	);
}
