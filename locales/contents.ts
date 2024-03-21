interface DictionaryEntry {
	dashboard: string;
	home: string;
	aboutUs: string;
	projects: string;
	communities: string;
	my_posts: string;
	threats: string;
	auditReports: string;
	disasterForecast: string;
	donationHistory: string;
	voluntary: string;
	gallery: string;
	activity: string;
	contactUs: string;
	signout: string;
	changeMode: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
	en: {
		dashboard: "Dashboard",
		home: "Home",
		aboutUs: "About us",
		projects: "Projects",
		communities: "Communities",
		my_posts: "My posts",
		threats: "Threats",
		auditReports: "Audit reports",
		disasterForecast: "Disaster forecast",
		donationHistory: "Donation history",
		voluntary: "Voluntary",
		gallery: "Gallery",
		activity: "Activity",
		contactUs: "Contact us",
		signout: "Sign out",
		changeMode: "Change mode",
	},
	bn: {
		dashboard: "ড্যাশবোর্ড",
		home: "হোম",
		aboutUs: "আমাদের বিষয়",
		projects: "কার্যক্রমসমূহ",
		communities: "সংঘটনসমূহ",
		my_posts: "আমার পোস্ট",
		threats: "হুমকিসমূহ",
		auditReports: "হিসাব প্রতিবেদন",
		disasterForecast: "দুর্যোগ পূর্বাভাস",
		donationHistory: "দানের ইতিহাস",
		voluntary: "স্বেচ্ছাসেবা",
		gallery: "গ্যালারি",
		activity: "কর্মকাণ্ড",
		contactUs: "যোগাযোগ",
		signout: "লগআউট",
		changeMode: "মোড পরিবর্তন",
	},
};
