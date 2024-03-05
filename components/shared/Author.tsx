import { IUser } from "@/lib/models/UserModel";
import { formatDistanceToNow, parseISO } from "date-fns";
import Image from "next/image";

export default function Author({
	userInfo,
	imgSize,
	creationDate,
}: {
	userInfo: string | IUser;
	imgSize: number;
	creationDate: string;
}) {
	const parsedDate = parseISO(creationDate);
	const distanceString = formatDistanceToNow(parsedDate, { addSuffix: true });

	return (
		<div className="flex gap-2">
			<Image
				src={typeof userInfo === "string" ? "/dummy.png" : userInfo.imageUrl}
				alt="author-image"
				className="rounded-full"
				height={imgSize}
				width={imgSize}
			/>
			<div>
				<h3 className="text-sm">
					{typeof userInfo === "string" ? "Guest user" : userInfo.username}
				</h3>
				<p className="text-[12px]">{distanceString}</p>
			</div>
		</div>
	);
}
