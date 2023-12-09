import { demoNews } from "@/constants";
import { FormalCard } from ".";
import HeadingSection from "./HeadingSection";

export default function ShortListedNews() {
	return (
		<div className="shadow rounded-md border">
			<HeadingSection text="News" link="/news" linkText="View All" />

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-5 ">
				{demoNews.map((data) => (
					<FormalCard
						key={data.heading}
						heading={data.heading}
						image={data.img}
						description={data.description}
					/>
				))}
			</div>
		</div>
	);
}
