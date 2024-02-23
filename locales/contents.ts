interface DictionaryEntry {
	home: string;
	aboutUs: string;
	projects: string;
	communities: string;
	threats: string;
	auditReports: string;
	disasterForecast: string;
	donationHistory: string;
	gallery: string;
	activity: string;
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
		donationHistory: "Donation History",
		gallery: "Gallery",
		activity: "Activity",
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
		donationHistory: "দানের ইতিহাস",
		gallery: "গ্যালারি",
		activity: "কর্মকাণ্ড",
		resources: "সম্পদ",
		contactUs: "যোগাযোগ",
		signout: "লগআউট",
		darkMode: "কালো থিম",
	},
};
