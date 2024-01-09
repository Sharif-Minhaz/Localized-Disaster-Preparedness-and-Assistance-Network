import {
	Home,
	BadgeInfo,
	ClipboardList,
	Building,
	CalendarRange,
	BookMarked,
	FileText,
	AlertOctagonIcon,
	Radar,
	HeartHandshakeIcon,
	BookImage,
	Ticket,
	ShoppingBasket,
	MapPinned,
	Contact,
	ShieldAlert,
} from "lucide-react";

interface MenuItem {
	title: string;
	url: string;
	Icon: React.ElementType;
}

export const sideMenuData: MenuItem[] = [
	{
		title: "home",
		url: "/",
		Icon: Home,
	},
	{
		title: "aboutUs",
		url: "/about",
		Icon: BadgeInfo,
	},
	{
		title: "threats",
		url: "/threats",
		Icon: ShieldAlert,
	},
	{
		title: "projects",
		url: "/projects",
		Icon: ClipboardList,
	},
	{
		title: "organizations",
		url: "/organizations",
		Icon: Building,
	},
	{
		title: "news&Events",
		url: "/news-events",
		Icon: CalendarRange,
	},
	{
		title: "fieldStories",
		url: "/field-stories",
		Icon: BookMarked,
	},
	{
		title: "auditReports",
		url: "/audit-reports",
		Icon: FileText,
	},
	{
		title: "disasterSituations",
		url: "/disaster-situations",
		Icon: AlertOctagonIcon,
	},
	{
		title: "disasterForecast",
		url: "/disaster-forecast",
		Icon: Radar,
	},
	{
		title: "donate",
		url: "/donate",
		Icon: HeartHandshakeIcon,
	},
	{
		title: "gallery",
		url: "/gallery",
		Icon: BookImage,
	},
	{
		title: "publicTicket",
		url: "/public-ticket",
		Icon: Ticket,
	},
	{
		title: "resources",
		url: "/resources",
		Icon: ShoppingBasket,
	},
	{
		title: "disasterMap",
		url: "/disaster-map",
		Icon: MapPinned,
	},
	{
		title: "contactUs",
		url: "/contact",
		Icon: Contact,
	},
];

interface HeroCounts {
	title: string;
	count: number;
}

export const heroCounts: HeroCounts[] = [
	{ title: "Donors", count: 100 },
	{ title: "Resources", count: 450 },
	{ title: "Communities", count: 20 },
];

interface HeroThreats {
	slug: string;
	title: string;
	description: string;
	img: string;
	details: string;
}

export const heroThreats: HeroThreats[] = [
	{
		title: "Cyclone",
		description: "Rotating storm, powerful winds",
		img: "/assets/images/cyclone.jpeg",
		slug: "cyclone",
		details:
			"Bangladesh is often hit by cyclones, especially during the monsoon season. The low-lying coastal areas are particularly vulnerable to storm surges, which can cause widespread flooding and destruction.",
	},
	{
		title: "Earthquake",
		description: "Sudden ground shaking event",
		img: "/assets/images/earthquake.jpeg",
		slug: "earthquake",
		details:
			"While not as frequent as in some other regions, Bangladesh is situated in a seismically active zone. Earthquakes can lead to significant damage, especially in urban areas with poorly constructed buildings.",
	},
	{
		title: "Flood",
		description: "Rising water engulfs areas",
		img: "/assets/images/flood.jpeg",
		slug: "flood",
		details:
			"The country experiences regular river flooding during the monsoon season, affecting both urban and rural areas. Flash floods, riverbank erosion, and monsoon rains contribute to the recurrent flooding.",
	},
	// ----=----
	{
		title: "Riverbank Erosion",
		description: "River erosion, displacement",
		img: "/assets/images/river-erosion.jpeg",
		slug: "riverbank-erosion",
		details:
			"Bangladesh has numerous rivers, and riverbank erosion is a significant issue. It displaces communities, destroys agricultural land, and poses a threat to infrastructure.",
	},
	{
		title: "Drought",
		description: "Water scarcity, agricultural impact",
		img: "/assets/images/drought.jpeg",
		slug: "drought",
		details:
			"Certain regions of Bangladesh can experience drought conditions, affecting agriculture and water supply.",
	},
	{
		title: "Tornado",
		description: "High winds, localized damage",
		img: "/assets/images/tornado.jpeg",
		slug: "tornado",
		details:
			"Although less common than cyclones, tornadoes can occur and cause localized damage.",
	},
	{
		title: "Landslide",
		description: "Slope failure, hilly terrain",
		img: "/assets/images/landslide.jpeg",
		slug: "landslide",
		details:
			"Hilly areas in the southeastern part of the country are prone to landslides, particularly during heavy rainfall.",
	},
];

interface HeroCarousel {
	text: string;
	img: string;
}

export const heroCarousel: HeroCarousel[] = [
	{ text: "tornado", img: "/assets/images/tornado.png" },
	{ text: "wild-fire", img: "/assets/images/wild-fire.png" },
	{ text: "cyclone", img: "/assets/images/cyclone.png" },
];

interface Card {
	heading: string;
	description: string;
	img: string;
}

export const demoProjects: Card[] = [
	{
		heading: "Project-1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit, cumque expedita veniam tempora optio deleniti quam omnis, ut rerum voluptas nesciunt sit et quisquam enim amet sint laudantium id.",
		img: "/assets/images/news.jpg",
	},
	{
		heading: "Project-2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit, cumque expedita veniam tempora optio deleniti quam omnis, ut rerum voluptas nesciunt sit et quisquam enim amet sint laudantium id.",
		img: "/assets/images/news-2.png",
	},
	{
		heading: "Project-3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit, cumque expedita veniam tempora optio deleniti quam omnis, ut rerum voluptas nesciunt sit et quisquam enim amet sint laudantium id.",
		img: "/assets/images/news-3.jpg",
	},
];

export const demoNews: Card[] = [
	{
		heading: "News-1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit, cumque expedita veniam tempora optio deleniti quam omnis, ut rerum voluptas nesciunt sit et quisquam enim amet sint laudantium id.",
		img: "/assets/images/news-2.png",
	},
	{
		heading: "News-2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit, cumque expedita veniam tempora optio deleniti quam omnis, ut rerum voluptas nesciunt sit et quisquam enim amet sint laudantium id.",
		img: "/assets/images/news-3.jpg",
	},
	{
		heading: "News-3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit, cumque expedita veniam tempora optio deleniti quam omnis, ut rerum voluptas nesciunt sit et quisquam enim amet sint laudantium id.",
		img: "/assets/images/news.jpg",
	},
];

interface Org {
	name: string;
	bio: string;
	username: string;
	image: string;
}

export const demoOrganizations: Org[] = [
	{
		name: "Org 1",
		username: "org-1",
		bio: "Your trusted source for disaster preparedness resources. We're committed to helping you prepare for, respond to, and recover from disasters and emergencies. Explore our guides and expert advice to build resilience and reduce the impact of crises. Join us in creating a safer, more secure future.",
		image: "/assets/images/org.png",
	},
	{
		name: "Org 2",
		username: "org-2",
		bio: "Your trusted source for disaster preparedness resources. We're committed to helping you prepare for, respond to, and recover from disasters and emergencies. Explore our guides and expert advice to build resilience and reduce the impact of crises. Join us in creating a safer, more secure future.",
		image: "/assets/images/org.png",
	},
];
