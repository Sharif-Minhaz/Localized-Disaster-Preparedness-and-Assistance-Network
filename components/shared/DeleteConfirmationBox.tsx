"use client";

import { Trash2 } from "lucide-react";
import { ConfirmationDeleteBox } from "@/components/shared";

export default function DeleteConfirmationBox({
	iconSize = "size-5",
	action,
}: {
	iconSize?: string;
	action: () => void;
}) {
	return (
		<div>
			<ConfirmationDeleteBox
				title="Are you absolutely sure?"
				description="This action cannot be undone. This will permanently delete this item."
				action={action}
			>
				<Trash2 className={`text-red-500 ${iconSize}`} />
			</ConfirmationDeleteBox>
		</div>
	);
}
