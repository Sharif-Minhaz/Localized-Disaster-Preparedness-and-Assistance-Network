"use client";

import { ReportPDF } from "@/components/shared";
import { IProject } from "@/lib/models/ProjectModel";
import { IReport } from "@/lib/models/ReportModel";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@react-pdf/renderer").then((mod) => mod.PDFViewer), {
	ssr: false,
	loading: () => <p className="px-2 pt-2">Loading...</p>,
});

export default function AuditReports({ report }: { report: IReport }) {
	return (
		<div className="border">
			<PDFViewer className="aspect-square sm:aspect-[1/1.58]" width="100%">
				<ReportPDF report={report} />
			</PDFViewer>
			<p className="text-[12px] leading-[18px] my-2 line-clamp-2 px-2">
				File: {(report.project as IProject)?.heading}
			</p>
		</div>
	);
}
