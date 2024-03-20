import { IUser } from "@/lib/models/UserModel";
import { formatToShortDate } from "@/lib/utils";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function VolunteerCard({ volunteer }: { volunteer: IUser }) {
	return (
		<div className="mb-6 lg:mb-0">
			<div className="relative block rounded-lg p-6 shadow-lg dark:shadow-slate-900 border">
				<div className="flex-row items-center lg:flex">
					<div className="w-full shrink-0 grow-0 basis-auto lg:w-5/12 lg:pr-6">
						<Image
							src={volunteer.imageUrl}
							alt="Trendy Pants and Shoes"
							height={150}
							width={150}
							className="mb-6 object-cover rounded-md lg:mb-0"
						/>
					</div>
					<div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
						<h1 className="text-lg font-bold">{volunteer.name}</h1>
						<p className="text-sm text-neutral-500 -mt-1 dark:text-neutral-300">
							@{volunteer.username}
						</p>
						<p className="text-[12px] text-neutral-500 dark:text-neutral-300">
							{formatToShortDate(volunteer.createdAt)}
						</p>
						<ul className="mx-auto flex list-inside justify-center lg:justify-start mt-1">
							<a href={`mailto:${volunteer.email}`} className="">
								<Mail size={16} />
							</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
