import { AuditReport, Container, HeadingSection, Pagination } from "@/components/shared";
import { getAuditReports } from "@/lib/actions/project.actions";
import { IReport } from "@/lib/models/ReportModel";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Audit Report",
};

export default async function AuditReportPage({
	searchParams,
}: {
	searchParams: { page: string };
}) {
	const { reports, totalElements } = await getAuditReports({
		pageNumber: Number(searchParams?.page),
	});

	return (
		<Container headingText="Audit Reports">
			<div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
				{reports.map((report: IReport) => (
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
			<div className="my-5 flex w-full justify-center">
				<Pagination totalPages={Math.ceil(totalElements / 8)} />
			</div>
		</Container>
	);
}
