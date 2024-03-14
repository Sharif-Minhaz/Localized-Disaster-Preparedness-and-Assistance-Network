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
	darkMode: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
	en: {
		dashboard: "Dashboard",
		home: "Home",
		aboutUs: "About us",
		projects: "Projects",
		communities: "Communities",
		my_posts: "My Posts",
		threats: "Threats",
		auditReports: "Audit Reports",
		disasterForecast: "Disaster Forecast",
		donationHistory: "Donation History",
		voluntary: "Voluntary",
		gallery: "Gallery",
		activity: "Activity",
		contactUs: "Contact Us",
		signout: "Sign out",
		darkMode: "Dark Mode",
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
		darkMode: "কালো থিম",
	},
};
