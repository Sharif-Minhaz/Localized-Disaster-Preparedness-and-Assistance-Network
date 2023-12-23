import { HeadingSection } from "@/components/shared";
import Image from "next/image";

export default function AboutPage() {
	return (
		<div className="shadow rounded-md border">
			<HeadingSection text="About Us" />
			<div className="p-4 flex gap-8">
				<div className="hidden sm:flex bg-[url(/assets/images/circle-scatter-about.svg)] bg-[right_10%] bg-no-repeat">
					<div className="flex flex-col justify-center">
						<div className="w-[170px] h-[170px] relative">
							<Image
								src="/assets/images/about-1.png"
								fill
								className="object-cover"
								alt=""
							/>
						</div>
						<div className="w-[170px] h-[170px] relative">
							<Image
								src="/assets/images/about-3.png"
								fill
								className="object-cover"
								alt=""
							/>
						</div>
					</div>
					<div className="flex items-center">
						<div className="w-[170px] h-[170px] mt-7 relative">
							<Image
								src="/assets/images/about-2.png"
								fill
								className="object-cover"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<p>
						Dedicated to building a resilient future, our focus is on{" "}
						<span className="text-bluish-inverse font-bold">Bangladesh</span>.
					</p>
					<p>
						At the heart of our organization is a commitment to rapid and effective
						disaster response. We understand the urgency of providing immediate aid, and
						through your generous donations, we are able to mobilize quickly, offering
						vital resources, shelter, and comfort to those affected. Our focus is on
						making a tangible difference in the lives of individuals and families
						grappling with the aftermath of emergencies.
					</p>
					<div className="border-b border-green-200" />
					<p>
						Your generosity makes a profound impact on the lives of those in crisis. By
						joining hands with us, you enable our team to respond swiftly and
						comprehensively to emergencies. Your donations not only provide immediate
						relief but also contribute to the long-term resilience of communities.
						Together, we are creating a network of support that fosters hope, strength,
						and the capacity to overcome the challenges posed by disasters.
					</p>
				</div>
			</div>
		</div>
	);
}
