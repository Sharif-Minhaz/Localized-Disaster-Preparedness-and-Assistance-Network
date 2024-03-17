"use client";

import { Page, Text, Document, StyleSheet, Font } from "@react-pdf/renderer";
import { Table, TR, TH, TD } from "@ag-media/react-pdf-table";
import { IReport } from "@/lib/models/ReportModel";
import { formatToShortDate } from "@/lib/utils";

// Create Document Component
export default function ReportPDF({ report }: { report: IReport }) {
	return (
		<Document>
			<Page style={styles.body}>
				<Text style={styles.header} fixed>
					Localized Disaster Preparedness and Assistance Network (LDPAN)
				</Text>
				<Text style={styles.title}>
					{typeof report.project === "string" ? report.project : report.project.heading}
				</Text>
				<Text style={styles.location}>
					{typeof report.project === "string" ? report.project : report.project.location}
				</Text>
				<Text style={styles.author}>
					Report with financial statement and management reports
				</Text>
				<Text style={styles.author}>
					For {formatToShortDate(new Date(report.createdAt))}
				</Text>
				<Text style={styles.text}>
					{typeof report.project === "string"
						? report.project
						: report.project.description}
				</Text>
				<Text style={styles.date}>
					Project start date:{" "}
					{typeof report.project === "string"
						? report.project
						: formatToShortDate(new Date(report.project.from))}
				</Text>
				<Text style={styles.date}>
					Expected project end date:{" "}
					{typeof report.project === "string"
						? report.project
						: formatToShortDate(new Date(report.project.to))}
				</Text>
				<Text style={styles.tableHeading}>Resource distribution:</Text>
				<Table style={{ fontSize: "12px" }}>
					<TH>
						<TD style={{ padding: "4px 8px", fontWeight: "bold" }}>Resource</TD>
						<TD style={{ padding: "4px 8px", fontWeight: "bold" }}>Unit</TD>
						<TD style={{ padding: "4px 8px", fontWeight: "bold" }}>Donated</TD>
						<TD style={{ padding: "4px 8px", fontWeight: "bold" }}>Available</TD>
					</TH>
					{report.totalResource.map(
						(
							resource: { totalDonation: number; resourceName: string },
							index: number
						) => (
							<TR key={index}>
								<TD style={{ padding: "4px 8px" }}>{resource.resourceName}</TD>
								<TD style={{ padding: "4px 8px" }}>{resource.totalDonation}x</TD>
								<TD style={{ padding: "4px 8px" }}>
									{report.donatedResource[resource.resourceName]}x
								</TD>
								<TD style={{ padding: "4px 8px" }}>
									{resource.totalDonation -
										Number(report.donatedResource[resource.resourceName])}
									x
								</TD>
							</TR>
						)
					)}
				</Table>
				<Text style={styles.tableHeading}>Money distribution:</Text>
				<Table style={{ fontSize: "12px" }}>
					<TH>
						<TD style={{ padding: "4px 8px", fontWeight: "bold" }}>Gateway</TD>
						<TD style={{ padding: "4px 8px", fontWeight: "bold" }}>Amount</TD>
					</TH>
					<TR>
						<TD style={{ padding: "4px 8px" }}>Stripe</TD>
						<TD style={{ padding: "4px 8px" }}>{report.totalAmount}</TD>
					</TR>
					<TR>
						<TD style={{ padding: "4px 8px" }}>Total</TD>
						<TD style={{ padding: "4px 8px" }}>{report.totalAmount}</TD>
					</TR>
					<TR>
						<TD style={{ padding: "4px 8px" }}>Donated</TD>
						<TD style={{ padding: "4px 8px" }}>{report.donatedAmount}</TD>
					</TR>
					<TR>
						<TD style={{ padding: "4px 8px" }}>Available</TD>
						<TD style={{ padding: "4px 8px" }}>
							{report.totalAmount - report.donatedAmount}
						</TD>
					</TR>
				</Table>

				<Text
					style={styles.pageNumber}
					render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
					fixed
				/>
			</Page>
		</Document>
	);
}

Font.register({
	family: "Oswald",
	src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
	},
	title: {
		fontSize: 24,
		textAlign: "center",
		fontFamily: "Oswald",
	},
	location: {
		fontSize: 12,
		textAlign: "center",
		marginVertical: 10,
	},
	author: {
		fontSize: 12,
		textAlign: "center",
		marginBottom: 10,
	},
	tableHeading: {
		fontSize: 17,
		marginTop: 20,
		marginBottom: 12,
	},
	date: {
		fontSize: 12,
		marginBottom: 13,
	},
	text: {
		marginVertical: 12,
		fontSize: 14,
		textAlign: "justify",
		fontFamily: "Times-Roman",
	},
	header: {
		fontSize: 12,
		marginBottom: 20,
		textAlign: "center",
		color: "grey",
	},
	pageNumber: {
		position: "absolute",
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: "center",
		color: "grey",
	},
});
