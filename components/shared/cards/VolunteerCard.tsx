import { IUser } from "@/lib/models/UserModel";
import { formatToShortDate } from "@/lib/utils";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function VolunteerCard({ volunteer }: { volunteer: IUser }) {
	return (
		<div className="mb-4 lg:mb-0 bg-[url(/images/pat.png)] w-full">
			<div className="relative block rounded-lg p-4 shadow-lg dark:shadow-slate-900 border">
				<div className="items-center flex">
					<div className={`w-max shrink-1 flex grow-0 basis-auto pr-4 justify-start`}>
						<Image
							src={volunteer.imageUrl}
							alt="volunteer"
							height={100}
							width={100}
							className="object-cover w-full h-full rounded-md"
						/>
					</div>
					<div className={`text-left shrink-1 grow-1 basis-auto w-full`}>
						<h1
							title={volunteer.name}
							className="lg:text-lg font-bold md:text-xl line-clamp-1"
						>
							{volunteer.name}
						</h1>
						<p className="text-sm text-neutral-500 -mt-1 dark:text-neutral-300">
							@{volunteer.username}
						</p>
						<p className="font-montserrat text-[12px] text-neutral-500 dark:text-neutral-300">
							{formatToShortDate(volunteer.createdAt)}
						</p>
						<ul className="flex list-inside mt-1">
							<a
								href={`mailto:${volunteer.email}`}
								className="text-blue-400 text-[20px] lg:text-[16px]"
							>
								<Mail />
							</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
