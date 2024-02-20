interface DictionaryEntry {
	home: string;
	aboutUs: string;
	projects: string;
	communities: string;
	threats: string;
	auditReports: string;
	disasterForecast: string;
	donate: string;
	gallery: string;
	resources: string;
	contactUs: string;
	signout: string;
	darkMode: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
	en: {
		home: "Home",
		aboutUs: "About us",
		projects: "Projects",
		communities: "Communities",
		threats: "Threats",
		auditReports: "Audit Reports",
		disasterForecast: "Disaster Forecast",
		donate: "Donate",
		gallery: "Gallery",
		resources: "Resources",
		contactUs: "Contact Us",
		signout: "Sign out",
		darkMode: "Dark Mode",
	},
	bn: {
		home: "হোম",
		aboutUs: "আমাদের বিষয়",
		projects: "কার্যক্রমসমূহ",
		communities: "সংঘটনসমূহ",
		threats: "হুমকিসমূহ",
		auditReports: "হিসাব প্রতিবেদন",
		disasterForecast: "দুর্যোগ পূর্বাভাস",
		donate: "দান",
		gallery: "গ্যালারি",
		resources: "সম্পদ",
		contactUs: "যোগাযোগ",
		signout: "লগআউট",
		darkMode: "কালো থিম",
	},
};
