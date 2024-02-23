/* eslint-disable camelcase */
// Resource: https://clerk.com/docs/users/sync-data-to-your-backend
// Above article shows why we need webhooks i.e., to sync data to our backend

// Resource: https://docs.svix.com/receiving/verifying-payloads/why
// It's a good practice to verify webhooks. Above article shows why we should do it
import { Webhook, WebhookRequiredHeaders } from "svix";
import { headers } from "next/headers";

import { IncomingHttpHeaders } from "http";

import { NextResponse } from "next/server";
import { createUser, deleteUser, updateUser } from "@/lib/actions/user.actions";
import {
	addMemberToCommunity,
	createCommunity,
	deleteCommunity,
	removeUserFromCommunity,
	updateCommunityInfo,
} from "@/lib/actions/community.actions";
import { clerkClient } from "@clerk/nextjs";

// Resource: https://clerk.com/docs/integration/webhooks#supported-events
type EventType =
	| "user.created"
	| "user.deleted"
	| "user.updated"
	| "organization.created"
	| "organizationInvitation.created"
	| "organizationMembership.created"
	| "organizationMembership.deleted"
	| "organization.updated"
	| "organization.deleted";

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

	// Activate Webhook in the Clerk Dashboard.
	// After adding the endpoint, we'll get the secret.
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
		const { id, first_name, last_name, username, email_addresses, profile_image_url } =
			evnt?.data ?? {};

		const userData = {
			clerkId: id,
			name: first_name + " " + last_name,
			username,
			//@ts-ignore
			email: email_addresses?.[0]?.email_address,
			imageUrl: profile_image_url,
		};

		try {
			//@ts-ignore
			const newUser = await createUser(userData);

			if (newUser) {
				await clerkClient.users.updateUserMetadata(id.toString(), {
					publicMetadata: {
						userId: newUser._id,
					},
				});
			}

			return NextResponse.json({ message: "User created" }, { status: 201 });
		} catch (err) {
			console.error(err);
			return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
		}
	}

	if (eventType === "user.updated") {
		try {
			const { id, username, profile_image_url } = evnt?.data ?? {};

			const userData = {
				clerkId: id,
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

	// Listen organization creation event
	if (eventType === "organization.created") {
		// Resource: https://clerk.com/docs/reference/backend-api/tag/Organizations#operation/CreateOrganization
		const { id, name, slug, logo_url, image_url, created_by } = evnt?.data ?? {};

		try {
			await createCommunity(
				// @ts-ignore
				id,
				name,
				slug,
				logo_url || image_url,
				"Your trusted source for disaster preparedness resources. We're committed to helping you prepare for, respond to, and recover from disasters and emergencies. Explore our guides and expert advice to build resilience and reduce the impact of crises. Join us in creating a safer, more secure future.",
				created_by
			);

			return NextResponse.json({ message: "User created" }, { status: 201 });
		} catch (err) {
			console.log(err);
			return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
		}
	}

	// Listen organization invitation creation event.
	// Just to show. You can avoid this or tell people that we can create a new mongoose action and
	// pending invites in the database.
	if (eventType === "organizationInvitation.created") {
		try {
			// Resource: https://clerk.com/docs/reference/backend-api/tag/Organization-Invitations#operation/CreateOrganizationInvitation
			console.log("Invitation created", evnt?.data);

			return NextResponse.json({ message: "Invitation created" }, { status: 201 });
		} catch (err) {
			console.log(err);

			return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
		}
	}

	// Listen organization membership (member invite & accepted) creation
	if (eventType === "organizationMembership.created") {
		try {
			// Resource: https://clerk.com/docs/reference/backend-api/tag/Organization-Memberships#operation/CreateOrganizationMembership
			const { organization, public_user_data } = evnt?.data;
			console.log("created", evnt?.data);

			// @ts-ignore
			await addMemberToCommunity(organization.id, public_user_data.user_id);

			return NextResponse.json({ message: "Invitation accepted" }, { status: 201 });
		} catch (err) {
			console.log(err);

			return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
		}
	}

	// Listen member deletion event
	if (eventType === "organizationMembership.deleted") {
		try {
			// Resource: https://clerk.com/docs/reference/backend-api/tag/Organization-Memberships#operation/DeleteOrganizationMembership
			const { organization, public_user_data } = evnt?.data;
			console.log("removed", evnt?.data);

			// @ts-ignore
			await removeUserFromCommunity(public_user_data.user_id, organization.id);

			return NextResponse.json({ message: "Member removed" }, { status: 201 });
		} catch (err) {
			console.log(err);

			return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
		}
	}

	// Listen organization update event
	if (eventType === "organization.updated") {
		try {
			// Resource: https://clerk.com/docs/reference/backend-api/tag/Organizations#operation/UpdateOrganization
			const { id, logo_url, name, slug } = evnt?.data;
			console.log("updated", evnt?.data);

			// @ts-ignore
			await updateCommunityInfo(id, name, slug, logo_url);

			return NextResponse.json({ message: "Member removed" }, { status: 201 });
		} catch (err) {
			console.log(err);

			return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
		}
	}

	// Listen organization deletion event
	if (eventType === "organization.deleted") {
		try {
			// Resource: https://clerk.com/docs/reference/backend-api/tag/Organizations#operation/DeleteOrganization
			const { id } = evnt?.data;
			console.log("deleted", evnt?.data);

			// @ts-ignore
			await deleteCommunity(id);

			return NextResponse.json({ message: "Organization deleted" }, { status: 201 });
		} catch (err) {
			console.log(err);

			return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
		}
	}
};
