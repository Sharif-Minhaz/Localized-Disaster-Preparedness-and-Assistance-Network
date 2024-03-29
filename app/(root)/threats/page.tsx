import { Container, ThreatCard } from "@/components/shared";
import { heroThreats } from "@/constants";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Threats",
};

export default function ThreatPage() {
	return (
		<Container headingText="Threats">
			<div className="grid sm:grid-cols-3 grid-cols-1 gap-4 p-4">
				{heroThreats.map((data, index) => (
					<ThreatCard key={data.title} data={data} index={index} />
				))}
			</div>
		</Container>
	);
}
