"use client";

import { Trash2 } from "lucide-react";
import ConfirmationDeleteBox from "./ConfirmationDeleteBox";

export default function DeleteProjectCom({ action }: { action: () => void }) {
	return (
		<div>
			<ConfirmationDeleteBox
				title="Are you absolutely sure?"
				description="This action cannot be undone. This will permanently delete the project."
				action={action}
			>
				<Trash2 className="text-red-400 w-5 h-5" />
			</ConfirmationDeleteBox>
		</div>
	);
}
