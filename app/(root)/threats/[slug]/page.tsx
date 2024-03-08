import { HeroThreats, heroThreats } from "@/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
	return heroThreats.map((threat) => ({ slug: threat.slug }));
}

export default function SingleTreatPage({ params }: { params: { slug: string } }) {
	const threatIds = heroThreats.map((threat) => threat.slug);
	const threat = heroThreats.find((data) => data.slug === params.slug);

	if (!threatIds.includes(params.slug)) {
		return notFound();
	}

	return (
		<section>
			<section className="shadow rounded-xl border">
				<div className="sm:p-5 p-4 flex">
					<div className="h-[450px] relative overflow-hidden">
						<Image
							src={threat?.coverImg}
							className="h-full object-cover object-top rounded-xl"
							alt="threat image"
						/>
						<div className="absolute rounded-xl inset-0 bg-slate-900/50 w-full">
							<div className="flex h-full justify-center items-center">
								<div className="flex flex-col gap-2 text-white text-center">
									<h2 className="uppercase text-2xl sm:text-4xl">
										{threat?.title}
									</h2>
									<p className="text-white mb-2.5 sm:mb-4">
										{threat?.description}
									</p>
									<Link href="#more">
										<Button
											variant="outline"
											className="rounded-full dark:text-black hover:dark:text-white bg-transparent"
										>
											View Details
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-4 sm:mt-5 shadow rounded-xl border" id="more">
				<div className="sm:p-5 p-4 flex flex-col gap-3">
					<p>{threat?.details}</p>
					<AwarenessSection threat={threat} type="before" />
					<AwarenessSection threat={threat} type="during" />
					<AwarenessSection threat={threat} type="after" />
				</div>
			</section>
		</section>
	);
}

function AwarenessSection({
	threat,
	type,
}: {
	threat: HeroThreats | undefined;
	type: "after" | "before" | "during";
}) {
	return (
		<div className="border rounded-xl py-4">
			<h2 className="font-bold border-b capitalize px-4 pb-3">
				{type} {threat?.title}
			</h2>
			<ul className="px-4 pt-4">
				{threat?.[type].map((step, index) => (
					<li key={index} className="mb-2">
						<span className="inline-flex mr-2 text-sm font-semibold items-center justify-center size-[22px] rounded-full dark:border-slate-800 border-slate-300 border">
							{index + 1}
						</span>
						{step}
					</li>
				))}
			</ul>
		</div>
	);
}
