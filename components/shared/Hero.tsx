"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { heroCounts, heroThreats } from "@/constants";
import { Countup, HeroCarousel } from ".";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<div className="bg-[url('/assets/images/wave.svg')] bg-cover bg-bottom bg-no-repeat shadow rounded-md border">
			<div className="flex md:flex-row flex-col gap-5 md:p-5 p-4 bg-[url('/assets/images/circle-scatter-2.svg')] bg-cover bg-top bg-no-repeat">
				<div className="md:block hidden rounded-lg border-4 border-white dark:border-[#020817] bg-white dark:bg-[#020817]">
					<motion.div
						initial={{ opacity: 0 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1 }}
						className="w-[242px] h-full group rounded-md relative overflow-hidden"
					>
						<div className="absolute bg-gradient-to-tl from-blue-500/30 to-blue-300/30 z-10 inset-0 rounded-md" />
						<HeroCarousel />
					</motion.div>
				</div>
				<div className="flex flex-col">
					<div className="flex sm:flex-row flex-col gap-4 sm:gap-5">
						<div>
							<div className="flex sm:gap-3 gap-2 mb-2">
								<motion.small
									initial={{ y: -30, opacity: 0 }}
									viewport={{ once: true }}
									whileInView={{ y: 0, opacity: 1 }}
									className="flex items-center text-[14px] gap-1"
								>
									<Phone className="text-blue-400" size={16} />
									<span>+880 1122 323264</span>
								</motion.small>
								<motion.small
									initial={{ y: -30, opacity: 0 }}
									viewport={{ once: true }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.1 }}
									className="flex items-center text-[14px] gap-1"
								>
									<Mail className="text-green-400" size={16} />
									<span>ldpan@gmail.com</span>
								</motion.small>
							</div>
							<motion.h1
								initial={{ y: -30, opacity: 0 }}
								viewport={{ once: true }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.15, duration: 0.2 }}
								className="text-[30px] sm:text-[32px] md:text-[35px] lg:text-[40px] text-slate-600/95 dark:text-slate-100 uppercase font-roboto font-medium tracking-normal leading-[45px] sm:leading-[53px]"
							>
								Together, We Build a <span className="text-bluish">Future</span>{" "}
								Rooted in Resilience
							</motion.h1>
							<motion.p
								initial={{ opacity: 0 }}
								viewport={{ once: true }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.18 }}
								className="mt-4 mb-7 text-slate-800 dark:text-slate-300"
							>
								Stand with us to provide swift disaster relief. Your donation
								ensures immediate aid and lasting support for those in crisis.Your
								generosity enables us to respond rapidly to emergencies, offering
								vital resources, shelter, and comfort to those affected. Make a
								difference now.
							</motion.p>
							<motion.div
								initial={{ x: -10, opacity: 0 }}
								viewport={{ once: true }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}
								className="flex gap-6 items-center"
							>
								<Button
									asChild
									className="text-xs px-8 h-[35px] bg-gradient-to-r from-blue-500 to-green-400 hover:from-green-400 hover:to-blue-500 transition-all"
								>
									<Link href="/donate">Donate Now</Link>
								</Button>
								<Link
									href="/about"
									className="text-blue-600 text-sm bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text"
								>
									Learn More {"->"}{" "}
								</Link>
							</motion.div>
						</div>

						<div className="sm:text-right text-center justify-center flex sm:flex-col flex-row gap-8 mt-10 sm:pl-6">
							{heroCounts.map((data, index) => (
								<motion.div
									initial={{ x: 10, opacity: 0 }}
									viewport={{ once: true }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{ delay: 0.22 * index }}
									key={data.title}
									className="flex flex-col gap-1.5 leading-none"
								>
									<h1 className="text-[30px] font-roboto font-medium text-bluish-inverse">
										<Countup end={data.count} delay={index} />+
									</h1>
									<p className="text-[15px]">{data.title}</p>
								</motion.div>
							))}
						</div>
					</div>

					{/* ------------ items ---------- */}
					<div className="mt-8">
						<motion.h1
							initial={{ y: -10, opacity: 0 }}
							viewport={{ once: true }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.1 }}
							className="uppercase font-roboto font-medium mb-4"
						>
							Threats
						</motion.h1>
						<div className="flex sm:flex-row flex-col gap-4">
							{heroThreats.map((data, index) => (
								<motion.article
									key={data.title}
									initial={{ y: -20, opacity: 0 }}
									viewport={{ once: true }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.1 * index, duration: 0.2 }}
									className="p-2 shadow-sm hover:shadow transition-all w-full rounded-md border relative drop-shadow-lg dark:bg-slate-900 bg-white dark:bg-opacity-40 bg-opacity-50 backdrop-blur"
								>
									<Link className="w-full flex gap-3" href={data.route}>
										<div className="flex items-center">
											<Image
												src={data.img}
												height={80}
												width={80}
												className="object-cover rounded-full"
												alt={data.title}
											/>
										</div>
										<div className="flex justify-center flex-col gap-1.5">
											<h1 className="font-roboto font-medium">
												{data.title}
											</h1>
											<p className="text-[13px] dark:text-slate-300 text-slate-800">
												{data.description}
											</p>
										</div>
									</Link>
								</motion.article>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
