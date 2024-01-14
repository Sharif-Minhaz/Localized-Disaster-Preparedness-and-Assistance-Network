"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { DatePickerWithRange, Tiptap } from ".";
import { Plus } from "lucide-react";

export default function ProjectForm() {
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(2024, 0, 20),
		to: addDays(new Date(2024, 0, 20), 20),
	});

	return (
		<form className="flex flex-col gap-5">
			<div className="flex gap-2 flex-col">
				<Label htmlFor="heading">Heading</Label>
				<Input name="heading" placeholder="Enter project heading" />
			</div>
			<div className="flex gap-2 flex-col">
				<Label htmlFor="projectPeriod">Project Period</Label>
				<DatePickerWithRange date={date} setDate={setDate} />
			</div>
			<div className="flex gap-2 flex-col">
				<Label htmlFor="partnerOrganization">Partner Organizations</Label>
				<Input name="partnerOrganization" placeholder="Enter project heading" />
			</div>
			<div className="flex gap-2 flex-col">
				<Label htmlFor="description">Description</Label>
				<Textarea name="description" rows={6} placeholder="Enter project heading" />
			</div>
			<div className="flex gap-2 flex-col">
				<Label htmlFor="image">Project Image</Label>
				<Input name="image" type="file" accept="image/*" />
			</div>
			<div className="flex gap-2 flex-col">
				<Label htmlFor="image">Project Details</Label>
				<Tiptap />
			</div>
			<div className="pb-5">
				<Button type="submit">
					<Plus /> Add Project
				</Button>
			</div>
		</form>
	);
}
