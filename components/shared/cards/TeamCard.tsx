import { Button } from "@/components/ui/button";
import { ITeamData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function TeamCard({ member }: { member: ITeamData }) {
	return (
		<article className="border shadow-md dark:shadow-gray-900 rounded-xl p-4 bg-[url('/assets/images/pat.png')]">
			<div className="relative flex justify-center">
				<Image
					width={200}
					height={200}
					loading="lazy"
					src={member.image}
					alt="card image"
					className="rounded-full object-cover ring-4 ring-blue-500 h-[200px]"
				/>
			</div>

			<div className="text-center">
				<h1 className="text-xl mt-4">{member.name}</h1>
				<p className="text-blue-700">{member.title}</p>
				<p className="my-5 text-[15px]">
					I&apos;m a skilled MERN stack developer with expertise in{" "}
					<span className="bg-green-600 px-2 py-0.5 text-[11px] text-white rounded-full">
						MongoDB
					</span>
					,{" "}
					<span className="bg-slate-500 px-2 py-0.5 text-[11px] text-white rounded-full">
						Express
					</span>
					,{" "}
					<span className="bg-blue-500 px-2 py-0.5 text-[11px] text-white rounded-full">
						React
					</span>
					,{" "}
					<span className="bg-blue-800 px-2 py-0.5 text-[11px] text-white rounded-full">
						Redux
					</span>
					,{" "}
					<span className="bg-green-700 px-2 py-0.5 text-[11px] text-white rounded-full">
						Node
					</span>
					, &{" "}
					<span className="bg-slate-700 px-2 py-0.5 text-[11px] text-white rounded-full">
						Next
					</span>
					. Passionate about building dynamic and efficient fullstack web applications.
				</p>
				{/* social media section - facebook, github and whatsapp */}
				<div id="socialMedia">
					<div className="process-section flex justify-center">
						<div className="social-bar">
							<div className="social-icons">
								<Link href={member.fb} className="slider-nav-item">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
										className="social-icon icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
									</svg>
								</Link>
								<Link href={member.gh} className="slider-nav-item">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
										className="social-icon icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
									</svg>
								</Link>
								<a href={member.wp} className="slider-nav-item">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
										className="social-icon icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
										<path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
				<a target="_blank" href={`mailto:${member.email}`}>
					<Button className="rounded-full shadow-lg">Hire for a Task</Button>
				</a>
			</div>
		</article>
	);
}
