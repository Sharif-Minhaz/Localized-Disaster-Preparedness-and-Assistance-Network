import { heroThreats } from "@/constants";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	return heroThreats.map((threat) => ({ slug: threat.slug }));
}

export default function SingleTreatPage({ params }: { params: { slug: string } }) {
	const threatIds = heroThreats.map((threat) => threat.slug);

	if (!threatIds.includes(params.slug)) {
		return notFound();
	}

	return <div>{params.slug}</div>;
}
