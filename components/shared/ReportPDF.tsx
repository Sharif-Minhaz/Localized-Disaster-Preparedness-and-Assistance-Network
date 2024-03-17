import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";

// Create Document Component
export default function ReportPDF() {
	return (
		<Document>
			<Page style={styles.body}>
				<Text style={styles.header} fixed>
					~ Created with react-pdf ~
				</Text>
				<Text style={styles.title}>Don Quijote de la Mancha</Text>
				<Text style={styles.author}>Miguel de Cervantes</Text>
				<Text style={styles.subtitle}>
					Lalal Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
					Quijote de la Mancha
				</Text>

				<Text style={styles.text}>
					En resolución, él se enfrascó tanto en su lectura, que se le pasaban las noches
					leyendo de claro en claro, y los días de turbio en turbio, y así, del poco
					dormir y del mucho leer, se le secó el cerebro, de manera que vino a perder el
					juicio. Llenósele la fantasía de todo aquello que leía en los libros, aás cierta
					en el mundo.
				</Text>
				<Text style={styles.subtitle}>
					Capítulo II: Que trata de la primera salida que de su tierra hizo el ingenioso
					Don Quijote
				</Text>
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
	author: {
		fontSize: 12,
		textAlign: "center",
		marginBottom: 40,
	},
	subtitle: {
		fontSize: 18,
		margin: 12,
		fontFamily: "Oswald",
	},
	text: {
		margin: 12,
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
