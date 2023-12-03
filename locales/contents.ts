interface DictionaryEntry {
	home: string;
	aboutUs: string;
	projects: string;
	organizations: string;
	threats: string;
	"news&Events": string;
	fieldStories: string;
	auditReports: string;
	disasterSituations: string;
	disasterForecast: string;
	donate: string;
	gallery: string;
	publicTicket: string;
	resources: string;
	disasterMap: string;
	contactUs: string;
	logout: string;
	darkMode: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
	en: {
		home: "Home",
		aboutUs: "About us",
		projects: "Projects",
		organizations: "Organizations",
		threats: "Threats",
		"news&Events": "News & Events",
		fieldStories: "Field Stories",
		auditReports: "Audit Reports",
		disasterSituations: "Disaster Situations",
		disasterForecast: "Disaster Forecast",
		donate: "Donate",
		gallery: "Gallery",
		publicTicket: "Public Ticket",
		resources: "Resources",
		disasterMap: "Disaster Map",
		contactUs: "Contact Us",
		logout: "Logout",
		darkMode: "Dark Mode",
	},
	bn: {
		home: "হোম",
		aboutUs: "আমাদের বিষয়",
		projects: "কার্যক্রমসমূহ",
		organizations: "সংঘটনসমূহ",
		threats: "হুমকিসমূহ",
		"news&Events": "সংবাদ & কর্মসূচি",
		fieldStories: "ফিল্ড স্টোর",
		auditReports: "হিসাব প্রতিবেদন",
		disasterSituations: "দুর্যোগ ব্যবস্থাপনা",
		disasterForecast: "দুর্যোগ পূর্বাভাস",
		donate: "দান",
		gallery: "গ্যালারি",
		publicTicket: "পাবলিক টিকিট",
		resources: "সম্পদ",
		disasterMap: "দুর্যোগ মানচিত্র",
		contactUs: "যোগাযোগ",
		logout: "লগআউট",
		darkMode: "কালো থিম",
	},
};
