import { Container, PredictionResult } from "@/components/shared";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Disaster Forecast",
};

export default function DisasterForecastPage() {
	return (
		<Container headingText="Disaster Forecast">
			<PredictionResult />
		</Container>
	);
}
