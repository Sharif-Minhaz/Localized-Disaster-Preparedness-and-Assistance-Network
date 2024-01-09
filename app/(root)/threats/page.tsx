import { HeadingSection, ThreatCard } from "@/components/shared";
import { heroThreats } from "@/constants";

export default function ThreatPage() {
	return (
		<div className="shadow rounded-md border">
			<HeadingSection text="Threats" />
			<div className="grid sm:grid-cols-3 grid-cols-1 gap-4 p-4">
				{heroThreats.map((data, index) => (
					<ThreatCard key={data.title} data={data} index={index} />
				))}
			</div>
		</div>
	);
}
