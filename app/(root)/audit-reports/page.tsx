import { AuditReport, HeadingSection } from "@/components/shared";
import { getAuditReports } from "@/lib/actions/project.actions";
import { IReport } from "@/lib/models/ReportModel";

export default async function AuditReportPage() {
	const reports: IReport[] | [] = await getAuditReports();

	return (
		<div className="shadow rounded-xl border">
			<HeadingSection text="Audit Reports" />
			<div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
				{reports.map((report) => (
					<AuditReport key={report._id} report={report as IReport} />
				))}
			</div>
			{reports.length === 0 ? (
				<p className="pb-4 px-4 -mt-4">
					No audit report available right now. Wait till a project completion.
				</p>
			) : (
				""
			)}
		</div>
	);
}
