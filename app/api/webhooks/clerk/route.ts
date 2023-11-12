/* eslint-disable camelcase */
// Resource: https://clerk.com/docs/users/sync-data-to-your-backend
// Above article shows why we need webhooks i.e., to sync data to our backend

// Resource: https://docs.svix.com/receiving/verifying-payloads/why
// It's a good practice to verify webhooks. Above article shows why we should do it
import { Webhook, WebhookRequiredHeaders } from "svix";
import { headers } from "next/headers";

import { IncomingHttpHeaders } from "http";

import { NextResponse } from "next/server";
import { createUser, deleteUser, updateUser } from "@/lib/actions/user.action";

// Resource: https://clerk.com/docs/integration/webhooks#supported-events
// Above document lists the supported events
type EventType = "user.created" | "user.deleted" | "user.updated";

type Event = {
	data: Record<string, string | number | Record<string, string>[]>;
	object: "event";
	type: EventType;
};

export const POST = async (request: Request) => {
	const payload = await request.json();
	const header = headers();

	const heads = {
		"svix-id": header.get("svix-id"),
		"svix-timestamp": header.get("svix-timestamp"),
		"svix-signature": header.get("svix-signature"),
	};

	const WEBHOOK_SECRET = process.env.NEXT_CLERK_WEBHOOK_SECRET;

	if (!WEBHOOK_SECRET) {
		throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local");
	}

	// Activitate Webhook in the Clerk Dashboard.
	// After adding the endpoint, you'll see the secret on the right side.
	const wh = new Webhook(WEBHOOK_SECRET);

	let evnt: Event | null = null;

	try {
		evnt = wh.verify(
			JSON.stringify(payload),
			heads as IncomingHttpHeaders & WebhookRequiredHeaders
		) as Event;
	} catch (err) {
		return NextResponse.json({ message: err }, { status: 400 });
	}

	const eventType: EventType = evnt?.type!;

	// Listen user creation event
	if (eventType === "user.created") {
		// Show what evnt?.data sends from above resource

		const { id, first_name, last_name, username, email_addresses, profile_image_url } =
			evnt?.data ?? {};

		const userData = {
			userId: id,
			name: first_name + " " + last_name,
			username,
			//@ts-ignore
			email: email_addresses?.[0]?.email_address,
			imageUrl: profile_image_url,
		};

		try {
			//@ts-ignore
			await createUser(userData);

			return NextResponse.json({ message: "User created" }, { status: 201 });
		} catch (err) {
			console.log(err);
			return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
		}
	}

	if (eventType === "user.updated") {
		try {
			const { id, username, profile_image_url } = evnt?.data ?? {};

			console.log(evnt?.data);

			const userData = {
				userId: id,
				username,
				imageUrl: profile_image_url,
			};
			//@ts-ignore
			await updateUser(userData);

			return NextResponse.json({ message: "User updated" }, { status: 200 });
		} catch (err) {
			console.log(err);
			return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
		}
	}

	if (eventType === "user.deleted") {
		try {
			const { id, deleted } = evnt?.data ?? {};
			console.log(evnt?.data);
			if (!deleted) {
				throw new Error("User deletion failed");
			}
			//@ts-ignore
			await deleteUser(id);

			return NextResponse.json({ message: "User deleted" }, { status: 200 });
		} catch (err) {
			console.log(err);
			return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
		}
	}

	console.log(evnt);
};
