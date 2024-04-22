"use client";

import * as React from "react";
import { addDays, format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";

export default function SelectPredictionDate({
	value,
	handler,
}: {
	value: Date;
	handler: (date: Date | undefined) => void;
}) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-full justify-start text-left font-normal",
						!value && "text-muted-foreground"
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{value ? format(value, "PPP") : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent align="start" className="flex w-auto flex-col space-y-2 p-2">
				<Select onValueChange={(value) => handler(addDays(new Date(), parseInt(value)))}>
					<SelectTrigger>
						<SelectValue placeholder="Select" />
					</SelectTrigger>
					<SelectContent position="popper">
						<SelectItem value="0">Today</SelectItem>
						<SelectItem value="1">Tomorrow</SelectItem>
						<SelectItem value="3">In 3 days</SelectItem>
						<SelectItem value="7">In a week</SelectItem>
					</SelectContent>
				</Select>
				<div className="rounded-md border">
					<Calendar
						mode="single"
						selected={value}
						onSelect={handler}
						disabled={(date) => {
							// Create a new Date object for today's date with the time set to 00:00:00
							const today = new Date();
							today.setHours(0, 0, 0, 0);

							// Create a new Date object for the date from the calendar with the time set to 00:00:00
							const calendarDate = new Date(date);
							calendarDate.setHours(0, 0, 0, 0);

							// Compare the two dates
							return calendarDate <= today;
						}}
						initialFocus
					/>
				</div>
			</PopoverContent>
		</Popover>
	);
}
