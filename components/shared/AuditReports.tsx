"use client";

import { ReportPDF } from "@/components/shared";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@react-pdf/renderer").then((mod) => mod.PDFViewer), {
	ssr: false,
	loading: () => <p>Loading...</p>,
});

export default function AuditReports() {
	return (
		<PDFViewer>
			<ReportPDF />
		</PDFViewer>
	);
}
