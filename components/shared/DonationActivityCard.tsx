import { IDonation } from "@/lib/models/DonationModel";
import { addCommasToNumber, formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
	history: IDonation;
}

export default function DonationActivityCard({ history }: Props) {
	return (
		<article className="shadow-md border rounded-xl overflow-hidden">
			<div className=" w-full lg:max-w-full lg:flex">
				<div
					style={{
						backgroundImage: `url(${
							typeof history.projectId === "string"
								? history.projectId
								: history.projectId.image
						})`,
					}}
					className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
					title="Mountain"
				/>
				<div className="p-4 flex flex-col justify-between leading-normal">
					<div className="mb-4">
						<p className="text-sm text-gray-600 dark:text-gray-200 flex items-center">
							<svg
								className="fill-current text-gray-500 dark:text-gray-300 w-3 h-3 mr-2"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
							</svg>
							Members only
						</p>
						<Link
							href={`/projects/${
								typeof history.projectId === "string"
									? history.projectId
									: history.projectId.slug
							}`}
						>
							<h3 className="text-gray-900 dark:text-gray-300 font-bold text-xl mb-1 line-clamp-1 hover:underline hover:decoration-dotted">
								{typeof history.projectId === "string"
									? history.projectId
									: history.projectId.heading}
							</h3>
						</Link>
						<p className="text-gray-700 dark:text-gray-300 text-base line-clamp-2">
							{typeof history.projectId === "string"
								? history.projectId
								: history.projectId.description}
						</p>
						<p className="mt-2 text-sm">
							<strong>Donation Note: </strong>
							{history.note ? history.note : <em>Not provided.</em>}
						</p>
						<p className="mt-2 text-sm">
							<strong>Mobile Number: </strong>
							{history.mobile}
						</p>
					</div>
					<div className="flex xs:flex-row flex-col gap-4 justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
						<div className="flex items-center">
							<Image
								height={40}
								width={40}
								className="rounded-full mr-4"
								src={
									typeof history.donatedBy === "string"
										? history.donatedBy
										: history.donatedBy.imageUrl
								}
								alt="Avatar of donor"
							/>
							<div className="text-sm">
								<p className="text-gray-900 dark:text-gray-100">
									{typeof history.donatedBy === "string"
										? history.donatedBy
										: history.donatedBy.username}
								</p>
								<p className="text-gray-600 dark:text-gray-200">
									{formatDate(history.createdAt)}
								</p>
							</div>
						</div>
						{history.donationType === "money" ? (
							<p className="font-semibold text-gray-600 dark:text-gray-300 text-[22px]">
								৳ {addCommasToNumber(history.donationAmount || 0)}
							</p>
						) : (
							<div>
								<p>
									<span className="font-semibold">{history.resourceName}</span> -{" "}
									<span className="text-sm">{history.donationUnit}x</span>
								</p>
								<p>{history.shipperName}</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</article>
	);
}
