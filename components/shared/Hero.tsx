"use client";

import { Button } from "../ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { heroThreats } from "@/constants";
import { HeroCarousel, ThreatCard } from ".";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<div className="bg-[url('/images/wave.svg')] bg-cover bg-bottom bg-no-repeat dark:shadow-gray-900 shadow rounded-xl border">
			<div className="flex md:flex-row flex-col gap-5 md:p-5 p-4 bg-[url('/images/circle-scatter-2.svg')] bg-cover bg-top bg-no-repeat">
				<div className="md:block hidden rounded-xl border-4 border-white dark:border-[#020817] bg-white dark:bg-[#020817]">
					<motion.div
						initial={{ opacity: 0 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1 }}
						className="w-[242px] h-full group rounded-xl relative overflow-hidden"
					>
						<div className="absolute bg-gradient-to-tl from-blue-500/30 to-blue-300/30 z-10 inset-0 rounded-md" />
						<HeroCarousel />
					</motion.div>
				</div>
				<div className="flex flex-col">
					<div className="flex sm:flex-row flex-col gap-4 sm:gap-5">
						<div>
							<div className="flex flex-col xs:flex-row sm:gap-3 gap-2 mb-2">
								<motion.small
									initial={{ y: -30, opacity: 0 }}
									viewport={{ once: true }}
									whileInView={{ y: 0, opacity: 1 }}
									className="flex items-center text-[14px] gap-1"
								>
									<Phone className="text-blue-400" size={16} />
									<span>+880 1308-673831</span>
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
								className={`font-montserrat text-[30px] sm:text-[32px] md:text-[35px] lg:text-[40px] text-slate-600/95 dark:text-slate-100 font-medium tracking-normal leading-[40px] sm:leading-[50px]`}
							>
								Together, we build a <span className="text-bluish">future</span>
								<br />
								rooted in resilience
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
									className="text-xs shadow-md dark:shadow-gray-900 rounded-xl px-8 h-[35px] bg-gradient-to-r from-blue-500 to-green-400 hover:from-green-400 hover:to-blue-500 transition-all"
								>
									<Link className="font-montserrat" href="/projects">
										Donate Now
									</Link>
								</Button>
								<Link
									href="/about"
									className="font-montserrat flex items-center gap-1 text-sm text-blue-600"
								>
									View More <ArrowRight size={14} />
								</Link>
							</motion.div>
						</div>
					</div>

					{/* ------------ items ---------- */}
					<div className="mt-8">
						<motion.h1
							initial={{ y: -10, opacity: 0 }}
							viewport={{ once: true }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.1 }}
							className="uppercase font-medium mb-4"
						>
							Threats
						</motion.h1>
						<div className="flex sm:flex-row flex-col gap-4">
							{[...heroThreats].slice(0, 3).map((data, index) => (
								<ThreatCard key={data.title} data={data} index={index} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
