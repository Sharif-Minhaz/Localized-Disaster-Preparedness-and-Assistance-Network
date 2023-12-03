import Image from "next/image";
import { Button } from "../ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { heroCounts, heroThreats } from "@/constants";

export default function Hero() {
	return (
		<div className="flex md:flex-row flex-col gap-5 md:p-5 p-4 shadow rounded-md border">
			<div className="md:block hidden">
				<div className="w-[242px] h-full relative">
					<Image
						draggable={false}
						src="/assets/images/disaster.jpeg"
						className="object-cover rounded-md"
						fill
						alt="disaster"
					/>
				</div>
			</div>
			<div className="flex flex-col">
				<div className="flex sm:flex-row flex-col gap-5">
					<div>
						<div className="flex gap-3 mb-2">
							<small className="flex items-center text-[14px] gap-1">
								<Phone className="text-blue-600" size={16} />
								<span>+880 1122 323264</span>
							</small>
							<small className="flex items-center text-[14px] gap-1">
								<Mail className="text-blue-600" size={16} />
								<span>ldpan@gmail.com</span>
							</small>
						</div>
						<h1 className="text-[30px] sm:text-[32px] md:text-[35px] lg:text-[40px] text-slate-700 dark:text-slate-100 uppercase font-sans font-semibold tracking-tight leading-[48px]">
							Together, We Build a <span className="text-blue-700">Future</span>{" "}
							Rooted in Resilience
						</h1>
						<p className="my-7 text-slate-800 dark:text-slate-300">
							Stand with us to provide swift disaster relief. Your donation ensures
							immediate aid and lasting support for those in crisis.Your generosity
							enables us to respond rapidly to emergencies, offering vital resources,
							shelter, and comfort to those affected. Make a difference now.
						</p>
						<div className="flex gap-6 items-center">
							<Button className="text-xs px-8 h-[35px]">Donate Now</Button>
							<Link href="/about-us" className="text-blue-600 text-sm">
								Learn More {"->"}{" "}
							</Link>
						</div>
					</div>

					<div className="sm:text-right text-center justify-center flex sm:flex-col flex-row gap-8 mt-10 sm:pl-6">
						{heroCounts.map((data) => (
							<div key={data.title} className="flex flex-col gap-1.5 leading-none">
								<h1 className="text-[26px] font-semibold text-blue-600">
									{data.count}+
								</h1>
								<p className="text-[15px]">{data.title}</p>
							</div>
						))}
					</div>
				</div>

				{/* ------------ items ---------- */}
				<div className="mt-8">
					<h1 className="uppercase font-semibold mb-4">Threats</h1>
					<div className="flex sm:flex-row flex-col gap-4">
						{heroThreats.map((data) => (
							<Link href={data.route} key={data.title}>
								<article className="flex gap-3 p-2 shadow-sm hover:shadow transition-all w-full rounded-md border relative">
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
										<h1 className="font-[500]">{data.title}</h1>
										<p className="text-[13px] dark:text-slate-300 text-slate-600">
											{data.description}
										</p>
									</div>
								</article>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
