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
