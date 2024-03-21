import { IUser } from "@/lib/models/UserModel";
import { formatToShortDate } from "@/lib/utils";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function VolunteerCard({ volunteer }: { volunteer: IUser }) {
	return (
		<div className="mb-4 lg:mb-0 bg-[url(/assets/images/pat.png)]">
			<div className="relative block rounded-lg p-4 shadow-lg dark:shadow-slate-900 border">
				<div className="flex-col lg:flex-row items-center lg:justify-center flex">
					<div className="w-full shrink-0 flex justify-center grow-0 basis-auto lg:w-5/12 lg:pr-4">
						<Image
							src={volunteer.imageUrl}
							alt="Trendy Pants and Shoes"
							height={150}
							width={150}
							className="mb-4 object-cover rounded-md lg:mb-0"
						/>
					</div>
					<div className="w-full text-center lg:text-left shrink-0 grow-0 basis-auto lg:w-7/12">
						<h1 className="lg:text-lg font-bold md:text-xl">{volunteer.name}</h1>
						<p className="text-sm text-neutral-500 -mt-1 dark:text-neutral-300">
							@{volunteer.username}
						</p>
						<p className="font-montserrat text-[12px] text-neutral-500 dark:text-neutral-300">
							{formatToShortDate(volunteer.createdAt)}
						</p>
						<ul className="mx-auto flex list-inside justify-center lg:justify-start mt-1">
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
