import { AuditReports, HeadingSection } from "@/components/shared";

export default function AuditReportPage() {
	return (
		<div className="shadow rounded-xl border">
			<HeadingSection text="Audit Reports" />
			<div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<AuditReports />
			</div>
		</div>
	);
}
