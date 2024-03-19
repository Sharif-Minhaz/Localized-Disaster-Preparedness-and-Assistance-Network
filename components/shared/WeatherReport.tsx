import HeadingSection from "./HeadingSection";

export default function WeatherReport() {
	return (
		<div className="shadow-md dark:shadow-gray-900 rounded-xl border">
			<HeadingSection text="Weather Reports" />

			<div className="p-4 sm:p-5">
				<iframe
					className="w-full rounded-xl"
					height="450"
					src="https://embed.windy.com/embed2.html?lat=23.373&lon=90.714&detailLat=23.598&detailLon=90.714&width=650&height=450&zoom=9&level=surface&overlay=thunder&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1"
				></iframe>
			</div>
		</div>
	);
}
