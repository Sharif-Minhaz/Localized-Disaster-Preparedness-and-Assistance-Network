import { ICommunity } from "@/lib/models/CommunityModel";
import { IUser } from "@/lib/models/UserModel";
import Image from "next/image";
import Link from "next/link";

export default function CommunityMemberAvatars({ members }: { members: IUser[] }) {
	return (
		<div className="flex -space-x-1.5 rtl:space-x-reverse">
			{members.slice(0, 3).map((member: IUser, index: number) => (
				<Image
					key={index}
					src={member?.imageUrl}
					alt="user image"
					width={23}
					height={23}
					className="border-2 border-white rounded-full dark:border-gray-800"
				/>
			))}
			{members.length > 3 && (
				<span className="flex items-center justify-center w-[23px] h-[23px] text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800">
					+{Math.min(99, members.length - 3)}
				</span>
			)}
		</div>
	);
}
