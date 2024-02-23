import stripe from "stripe";
import { NextResponse } from "next/server";
import { addDonation } from "@/lib/actions/donation.actions";
import { fetchProjectById } from "@/lib/actions/project.actions";

export async function POST(request: Request) {
	const body = await request.text();

	const sig = request.headers.get("stripe-signature") as string;
	const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

	let event;

	try {
		event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
	} catch (err) {
		return NextResponse.json({ message: "Webhook error", error: err });
	}

	// Get the ID and type
	const eventType = event.type;

	// CREATE
	if (eventType === "checkout.session.completed") {
		const { id, amount_total, metadata } = event.data.object;

		const donation = {
			stripeId: id,
			donationAmount: amount_total?.toString() || "",
			mobile: metadata?.mobile || "",
			note: metadata?.note || "",
			donationType: metadata?.donationType || "",
			donationUnit: metadata?.donationUnit || "",
			shipperName: metadata?.shipperName || "",
			resourceName: metadata?.resourceName || "",
		};

		let project;

		if (metadata?.projectId) {
			project = await fetchProjectById(metadata.projectId);
		}

		const newDonation = await addDonation(donation, metadata?.donatedBy || "", project);
		return NextResponse.json({ message: "OK", donated: newDonation });
	}

	return new Response("", { status: 200 });
}
