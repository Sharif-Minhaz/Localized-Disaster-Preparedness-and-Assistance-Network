"use client";

import CountUp from "react-countup";

interface Props {
	start?: number;
	end: number;
	delay: number;
}

export default function Countup({ start, end, delay }: Props) {
	return <CountUp useEasing={false} end={end} start={start || 0} delay={delay * 0.05} />;
}
