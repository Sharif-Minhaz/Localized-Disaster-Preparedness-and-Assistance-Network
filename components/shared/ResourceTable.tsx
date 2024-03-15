import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { IDonation } from "@/lib/models/DonationModel";
import { formatDate } from "@/lib/utils";

export default function ResourceTable({ data, amount }: { data: IDonation[]; amount: number }) {
	return (
		<Table className="shadow border">
			<TableCaption>A list of users recent resource donations.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Donation ID</TableHead>
					<TableHead>Donar Name</TableHead>
					<TableHead>Resource Name</TableHead>
					<TableHead>Date</TableHead>
					<TableHead className="text-right">Unit</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map((donation) => (
					<TableRow key={donation._id}>
						<TableCell className="font-medium">
							<span className="hidden sm:inline-block">{donation._id}</span>
							<span className="inline-block sm:hidden">
								{donation._id.slice(0, 10)}
							</span>
						</TableCell>
						<TableCell>
							{typeof donation.donatedBy === "string"
								? donation.donatedBy
								: donation.donatedBy.username}
						</TableCell>
						<TableCell>{donation.resourceName}</TableCell>
						<TableCell>{formatDate(donation.createdAt)}</TableCell>
						<TableCell className="text-right">{donation.donationUnit}x</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={4}>Total Amount</TableCell>
					<TableCell className="text-right">{amount}</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}
