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

import projectImage from "@/public/assets/images/project-1.jpg";

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

interface Projects {
	_id: string;
	slug: string;
	partnerOrganizations: string;
	image: any;
	projectPeriod: string;
	heading: string;
	description: string;
	details: string;
}

export const demoProjectsList: Projects[] = [
	{
		_id: "1skfsl",
		slug: "strengthening-local-dm-practices-through-go-ngo-partnership",
		partnerOrganizations: "Early Recovery Facility (ERF), UN Development Programme (UNDP)",
		projectPeriod: "May 2013 to April 2015 (2 years)",
		image: projectImage,
		heading: "Strengthening Local DM Practices Through GO-NGO Partnership",
		description:
			"The project aims to develop and strengthen GO-NGO partnership for accelerating the effective functioning of local level Disaster Management Committees (DMC)s. This objective will be pursued through strategic assessment of capacity and needs, developing technical capacities, bridging NGOs and DMCs, and coordination among various NGOs and agencies at different levels. The project will form, support and strengthen the ‘Network of NGOs” at national level and the ‘Core Groups’ at local level facilitating the effective functioning of DMCs.",
		details:
			'<p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Project Brief:</span></strong></span></span></span></span></p> <p style="text-align:justify"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><span style="font-family:Arial,&quot;sans-serif&quot;">The project aims to develop and strengthen the GO-NGO partnership to accelerate the effective functioning of local-level Disaster Management Committees (DMC)s. This objective will be pursued through strategic assessment of capacity and needs, developing technical capacities, bridging NGOs and DMCs, and coordination among various NGOs and agencies at different levels. The project will form, support, and strengthen the &lsquo;Network of NGOs&rdquo; at the national level and the &lsquo;Core Groups&rsquo; at the local level facilitating the effective functioning of DMCs. The formation of the groups and networks would ensure the adequate representation of the relevant sectors and actors as well as their effective synchronization. The overall motivation, however, is to develop capacities from an inside-driven approach and harvest largely on&nbsp;existing capacity assets at local levels.</span></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Goal:</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;">&nbsp;The disaster management system of the country is strengthened</span></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Expected outcome:</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;">&nbsp;DMCs are operational and better able to prepare for and respond to disasters.</span></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Working Areas:</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;">&nbsp;(5 districts, 15 Upazilla and 45 Union)</span></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Cyclone Zone:</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;">&nbsp;&nbsp;Satkhira, Bagerhat, Pirojpur</span></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Flood and River Bank Erosion Zone:</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;">&nbsp;Jamalpur</span></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Flood and Drought Zone:</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;">&nbsp;Gaibandha</span></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Project purpose and outputs:</span></strong></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><span style="font-family:Arial,&quot;sans-serif&quot;">The purpose of the project is to establish an effective coordination mechanism and effective GO-NGO partnership for accelerating the government&rsquo;s disaster risk reduction and response initiatives. Thus, during the project, the stage will be prepared for effective and sustainable coordination and cooperation amongst NGOs and with DMCs at the field level.&nbsp;</span></span></span></span></span></p> <p style="text-align:justify"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">The project is designed to yield three specific outputs:</span></strong></span></span></span></span></p> <p style="text-align:justify"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Output- 1:&nbsp;</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;">A well-functioning GO-NGO coordination system will be established. This will be to complement the DER&rsquo;s coordination effort. Hence the coordination structure will be in line with DER&rsquo;s, e.g. the thematic cluster system of DER. The coordination system will consist of core NGO groups at all levels, which will assist in carrying out many of the works&nbsp;</span><span style="font-family:Arial,&quot;sans-serif&quot;"><span style="color:black">at the field level. Once the NGOs are selected and trained, the coordination system will be set up and a guideline will be developed through extensive consultation at all levels for coordination among NGOs and with DMCs.</span></span></span></span></span></span></p> <p style="text-align:justify"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Output- 2:</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;"><span style="color:black">&nbsp;GO-NGOs partnership will be developed and strengthened to provide technical and professional support to Disaster Management Committees (DMCs) at the field level. The NGOs who are members of DMCs would be trained to provide the necessary technical support to their respective DMCs. The process would be detailed in a handbook so that the rest of the areas of the country can follow the guidelines to replicate the process.</span></span></span></span></span></span></p> <p style="text-align:justify"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Output- 3:&nbsp;</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;"><span style="color:black">Communication among the DMCs at different levels including that at the national level institutions (DMRD/DER/ERF/DRR/DMD) will be established. This will be done firstly digitally. A web portal will be established where all the DMC meeting minutes and DER meeting minutes will be uploaded instantly, allowing all stakeholders to know about the developments at all levels. The portal will have blogs to let all stakeholders&rsquo; voices be raised and ventilate their concerns. There will also be publications/communication materials. Secondly, extensive consultation among all stakeholders will establish a detailed communication channel for the disaster period.</span></span></span></span></span></span></p>',
	},
	{
		_id: "3skfsl",
		slug: "2-strengthening-local-dm-practices-through-go-ngo-partnership",
		partnerOrganizations:
			"2. Early Recovery Facility (ERF), United nation Development Programme",
		projectPeriod: "May 2013 to April 2015 (2 years)",
		image: projectImage,
		heading: "2. Strengthening Local DM Practices Through GO-NGO Partnership",
		description:
			"The project aims to develop and strengthen GO-NGO partnership for accelerating the effective functioning of local level Disaster Management Committees (DMC)s. This objective will be pursued through strategic assessment of capacity and needs, developing technical capacities, bridging NGOs and DMCs, and coordination among various NGOs and agencies at different levels. The project will form, support and strengthen the ‘Network of NGOs” at national level and the ‘Core Groups’ at local level facilitating the effective functioning of DMCs.",
		details:
			'<p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Project Brief:</span></strong></span></span></span></span></p> <p style="text-align:justify"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><span style="font-family:Arial,&quot;sans-serif&quot;">The project aims to develop and strengthen the GO-NGO partnership to accelerate the effective functioning of local-level Disaster Management Committees (DMC)s. This objective will be pursued through strategic assessment of capacity and needs, developing technical capacities, bridging NGOs and DMCs, and coordination among various NGOs and agencies at different levels. The project will form, support, and strengthen the &lsquo;Network of NGOs&rdquo; at the national level and the &lsquo;Core Groups&rsquo; at the local level facilitating the effective functioning of DMCs. The formation of the groups and networks would ensure the adequate representation of the relevant sectors and actors as well as their effective synchronization. The overall motivation, however, is to develop capacities from an inside-driven approach and harvest largely on&nbsp;existing capacity assets at local levels.</span></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Goal:</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;">&nbsp;The disaster management system of the country is strengthened</span></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Expected outcome:</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;">&nbsp;DMCs are operational and better able to prepare for and respond to disasters.</span></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Working Areas:</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;">&nbsp;(5 districts, 15 Upazilla and 45 Union)</span></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Cyclone Zone:</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;">&nbsp;&nbsp;Satkhira, Bagerhat, Pirojpur</span></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Flood and River Bank Erosion Zone:</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;">&nbsp;Jamalpur</span></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Flood and Drought Zone:</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;">&nbsp;Gaibandha</span></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Project purpose and outputs:</span></strong></span></span></span></span></p> <p style="text-align:start"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><span style="font-family:Arial,&quot;sans-serif&quot;">The purpose of the project is to establish an effective coordination mechanism and effective GO-NGO partnership for accelerating the government&rsquo;s disaster risk reduction and response initiatives. Thus, during the project, the stage will be prepared for effective and sustainable coordination and cooperation amongst NGOs and with DMCs at the field level.&nbsp;</span></span></span></span></span></p> <p style="text-align:justify"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">The project is designed to yield three specific outputs:</span></strong></span></span></span></span></p> <p style="text-align:justify"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Output- 1:&nbsp;</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;">A well-functioning GO-NGO coordination system will be established. This will be to complement the DER&rsquo;s coordination effort. Hence the coordination structure will be in line with DER&rsquo;s, e.g. the thematic cluster system of DER. The coordination system will consist of core NGO groups at all levels, which will assist in carrying out many of the works&nbsp;</span><span style="font-family:Arial,&quot;sans-serif&quot;"><span style="color:black">at the field level. Once the NGOs are selected and trained, the coordination system will be set up and a guideline will be developed through extensive consultation at all levels for coordination among NGOs and with DMCs.</span></span></span></span></span></span></p> <p style="text-align:justify"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Output- 2:</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;"><span style="color:black">&nbsp;GO-NGOs partnership will be developed and strengthened to provide technical and professional support to Disaster Management Committees (DMCs) at the field level. The NGOs who are members of DMCs would be trained to provide the necessary technical support to their respective DMCs. The process would be detailed in a handbook so that the rest of the areas of the country can follow the guidelines to replicate the process.</span></span></span></span></span></span></p> <p style="text-align:justify"><span style="font-size:14px"><span style="color:#333333"><span style="font-family:Arial,Helvetica,sans-serif"><span style="background-color:#ffffff"><strong><span style="font-family:Arial,&quot;sans-serif&quot;">Output- 3:&nbsp;</span></strong><span style="font-family:Arial,&quot;sans-serif&quot;"><span style="color:black">Communication among the DMCs at different levels including that at the national level institutions (DMRD/DER/ERF/DRR/DMD) will be established. This will be done firstly digitally. A web portal will be established where all the DMC meeting minutes and DER meeting minutes will be uploaded instantly, allowing all stakeholders to know about the developments at all levels. The portal will have blogs to let all stakeholders&rsquo; voices be raised and ventilate their concerns. There will also be publications/communication materials. Secondly, extensive consultation among all stakeholders will establish a detailed communication channel for the disaster period.</span></span></span></span></span></span></p>',
	},
];
