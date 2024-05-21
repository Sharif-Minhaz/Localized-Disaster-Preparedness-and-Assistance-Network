"use client";

import MultipleSelector, { Option } from "@/components/ui/multiple-selector";

interface Props {
	name: string;
	value: Option[];
	onChange: () => void;
	options: Option[];
}

export default function SelectVolunteers({ name, value, onChange, options }: Props) {
	return (
		<div className="flex w-full flex-col gap-5">
			<MultipleSelector
				value={value}
				name={name}
				onChange={onChange}
				defaultOptions={options}
				badgeClassName="bg-slate-800 hover:bg-slate-700 select-none"
				placeholder="Select volunteers you like to assign to this project"
				emptyIndicator={
					<p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
						no volunteer available.
					</p>
				}
			/>
		</div>
	);
}
