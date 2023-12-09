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
	title: string;
	description: string;
	img: string;
	route: string;
}

export const heroThreats: HeroThreats[] = [
	{
		title: "Cyclone",
		description: "Rotating storm, powerful winds",
		img: "/assets/images/cyclone.jpeg",
		route: "/threats",
	},
	{
		title: "Earthquake",
		description: "Sudden ground shaking event",
		img: "/assets/images/earthquake.jpeg",
		route: "/threats",
	},
	{
		title: "Flood",
		description: "Rising water engulfs areas",
		img: "/assets/images/flood.jpeg",
		route: "/threats",
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

interface News {
	heading: string;
	description: string;
	img: string;
}

export const demoProjects: News[] = [
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

export const demoNews: News[] = [
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
