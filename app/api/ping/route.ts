import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectToDB } from "@/lib/mongoose";

export const dynamic = "force-dynamic";

export async function GET() {
	try {
		await connectToDB();

		const state = mongoose.connection.readyState;
		// readyState: 0=disconnected, 1=connected, 2=connecting, 3=disconnecting
		const stateMap: Record<number, string> = {
			0: "disconnected",
			1: "connected",
			2: "connecting",
			3: "disconnecting",
		};

		const isHealthy = state === 1;

		return NextResponse.json(
			{
				status: isHealthy ? "ok" : "degraded",
				db: {
					state: stateMap[state] ?? "unknown",
					name: mongoose.connection.name ?? null,
				},
				timestamp: new Date().toISOString(),
			},
			{ status: isHealthy ? 200 : 503 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				status: "error",
				db: { state: "disconnected" },
				message: error instanceof Error ? error.message : "Unknown error",
				timestamp: new Date().toISOString(),
			},
			{ status: 503 }
		);
	}
}
