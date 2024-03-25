import {
	Home,
	BadgeInfo,
	ClipboardList,
	Building,
	FileText,
	Radar,
	HeartHandshakeIcon,
	BookImage,
	Contact,
	ShieldAlert,
	History,
	FilePenIcon,
	PersonStanding,
	LineChart,
} from "lucide-react";

import projectImage from "@/public/images/project-1.jpg";
import threatCyclone from "@/public/images/threat-cyclone.jpg";
import threatEarthquake from "@/public/images/threat-earthquake.jpg";
import threatFlood from "@/public/images/threat-flood.jpg";
import threatRiverbankErosion from "@/public/images/threat-river-bank-erosion.jpg";
import threatDrought from "@/public/images/threat-drought.jpg";
import threatTornado from "@/public/images/threat-tornado.jpg";
import threatLandslide from "@/public/images/threat-landslide.jpg";

export const APP_NAME = "Localized Disaster Preparedness & Assistance Network";
export const APP_DEFAULT_TITLE = "LDPAN";
export const APP_TITLE_TEMPLATE = "%s - LDPAN";
export const APP_DESCRIPTION =
	"A localized web-based platform that serves as a disaster preparedness and assistance network. This platform will connect communities, local authorities, and volunteers, facilitating the sharing of critical information, resources, and assistance during emergencies.";

interface MenuItem {
	title: string;
	url: string;
	Icon: React.ElementType;
}

export const adminSideMenuTitle = ["dashboard", "activity"];

export const sideMenuData: MenuItem[] = [
	{
		title: "dashboard",
		url: "/dashboard",
		Icon: LineChart,
	},
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
		title: "communities",
		url: "/communities",
		Icon: Building,
	},
	{
		title: "my_posts",
		url: "/my_posts",
		Icon: FilePenIcon,
	},
	{
		title: "auditReports",
		url: "/audit-reports",
		Icon: FileText,
	},
	{
		title: "disasterForecast",
		url: "/disaster-forecast",
		Icon: Radar,
	},
	{
		title: "donationHistory",
		url: "/donation-history",
		Icon: HeartHandshakeIcon,
	},
	{
		title: "voluntary",
		url: "/voluntary",
		Icon: PersonStanding,
	},
	{
		title: "gallery",
		url: "/gallery",
		Icon: BookImage,
	},
	{
		title: "activity",
		url: "/activity",
		Icon: History,
	},

	{
		title: "contactUs",
		url: "/contact",
		Icon: Contact,
	},
];

export interface HeroThreats {
	slug: string;
	title: string;
	description: string;
	img: string;
	coverImg: any;
	details: string;
	before: string[];
	during: string[];
	after: string[];
}

export const heroThreats: HeroThreats[] = [
	{
		title: "Cyclone",
		description: "Rotating storm, powerful winds",
		img: "/images/cyclone.jpeg",
		coverImg: threatCyclone,
		slug: "cyclone",
		before: [
			"Keep yourself updated with weather forecasts and warnings from reliable sources.",
			"Follow local authorities, meteorological departments, and news outlets for official information.",
			"Prepare an emergency kit with essential supplies, including water, non-perishable food, medications, flashlight, batteries, important documents, and first aid supplies.",
			"Reinforce doors and windows to minimize damage from strong winds.",
			"Secure outdoor objects that could become projectiles in high winds.",
			"Know the evacuation routes and the location of nearby cyclone shelters.",
			"Plan in advance where you and your family will go if evacuation is necessary.",
			"Establish a communication plan with family members, ensuring everyone knows how to reach each other in case of separation.",
		],
		during: [
			"Stay indoors and seek shelter well before the cyclone hits.",
			"Stay away from windows and doors, and avoid using elevators.",
			"Follow the instructions and advisories issued by local authorities.",
			"Adhere to evacuation orders if they are given.",
			"Keep your emergency kit close at hand.",
			"Use battery-powered devices for communication and lighting.",
			"Turn off gas and electrical appliances to reduce the risk of fire.",
			"Unplug electrical equipment to prevent damage from power surges.",
			"Continuously monitor weather updates and emergency broadcasts.",
			"Be aware of storm surges and potential flooding in your area.",
		],
		after: [
			"Be cautious of downed power lines, damaged buildings, and flooded areas.",
			"Avoid going outside until authorities declare it safe.",
			"Attend to any injuries and seek medical attention if needed.",
			"Contact emergency services if you or others require assistance.",
			"Assess the damage to your property but do so carefully.",
			"Take photographs or videos of damage for insurance claims.",
			"Wait for authorities to declare it safe before turning on utilities.",
			"Inspect appliances for damage before using them.",
			"Check on neighbors and offer assistance if needed.",
			"Participate in community efforts for cleanup and recovery.",
			"Follow instructions from local authorities regarding any ongoing emergency response efforts.",
			"Stay updated on relief and recovery services available in your area.",
		],
		details:
			"Bangladesh is often hit by cyclones, especially during the monsoon season. The low-lying coastal areas are particularly vulnerable to storm surges, which can cause widespread flooding and destruction.",
	},
	{
		title: "Earthquake",
		description: "Sudden ground shaking event",
		img: "/images/earthquake.jpeg",
		coverImg: threatEarthquake,
		slug: "earthquake",
		before: [
			"Educate yourself about earthquake risks and safety measures.",
			"Identify safe places in each room of your home, workplace, and other frequently visited locations.",
			"Secure heavy furniture, appliances, and other items that could pose a risk during an earthquake.",
			"Create an emergency kit with essentials like water, non-perishable food, medications, flashlight, batteries, first aid supplies, and important documents.",
			"Develop a family emergency plan, including communication and evacuation strategies.",
			"Know the emergency procedures at your workplace, school, and other relevant locations.",
			"Stay informed about earthquake preparedness through official sources and community initiatives.",
		],
		during: [
			"Drop, Cover, and Hold On: Drop to the ground, take cover under a sturdy piece of furniture, and hold on until the shaking stops.",
			"Stay indoors if you are inside a building; avoid doorways and windows.",
			"If you are outside, move to an open area away from buildings, trees, streetlights, and utility wires.",
			"If you are in a vehicle, pull over to a safe location away from overpasses, bridges, and tall structures.",
			"If you are in bed, stay there and protect your head and neck with a pillow.",
			"Be prepared for aftershocks, which may follow the initial earthquake.",
		],
		after: [
			"Check yourself and others for injuries; provide first aid as needed.",
			"Be cautious of potential hazards, such as damaged buildings, fallen debris, and broken glass.",
			"Avoid using elevators, and use stairs cautiously.",
			"Listen to emergency broadcasts for information and instructions.",
			"Assess your surroundings and evacuate the building if it is deemed unsafe.",
			"Contact loved ones to let them know you are safe and inquire about their well-being.",
			"Follow the guidance of emergency responders and authorities.",
			"Check for gas leaks and turn off the gas supply if you smell gas.",
			"Inspect your home for structural damage before reentering.",
			"Help neighbors who may need assistance, especially the elderly or those with disabilities.",
			"Document damage with photographs for insurance claims.",
			"Be prepared for potential aftershocks and continue to stay informed about emergency updates.",
		],
		details:
			"While not as frequent as in some other regions, Bangladesh is situated in a seismically active zone. Earthquakes can lead to significant damage, especially in urban areas with poorly constructed buildings.",
	},
	{
		title: "Flood",
		description: "Rising water engulfs areas",
		img: "/images/flood.jpeg",
		coverImg: threatFlood,
		slug: "flood",
		before: [
			"Stay informed about flood risks in your area by monitoring weather forecasts and flood alerts.",
			"Create an emergency kit containing essential supplies, including water, non-perishable food, medications, flashlight, batteries, important documents, and first aid supplies.",
			"Know the elevation level of your property in relation to nearby water bodies and flood zones.",
			"Develop a family emergency plan that includes evacuation routes and a communication strategy.",
			"Secure important documents in a waterproof container.",
			"Elevate appliances and electrical systems, such as fuse boxes, above potential flood levels.",
			"Install check valves in plumbing to prevent floodwater from backing up into drains.",
		],
		during: [
			"Listen to emergency broadcasts for up-to-date information and evacuation instructions.",
			"If advised to evacuate, do so immediately. Follow designated evacuation routes and avoid flooded roads.",
			"Avoid walking or driving through floodwaters. Just six inches of moving water can knock you down, and one foot of water can sweep away a vehicle.",
			"If trapped in a building, move to the highest level but do not climb into a closed attic without an escape route.",
			"Turn off utilities at the main power switch if instructed to do so.",
			"Avoid contact with floodwater, as it may be contaminated or contain hidden hazards.",
			"Follow official instructions and guidance from emergency services and authorities.",
		],
		after: [
			"Wait for authorities to declare it safe before returning to your home or area.",
			"Avoid entering flooded buildings until they have been inspected for safety.",
			"Document the damage with photographs for insurance claims.",
			"Dispose of contaminated food, especially if it has come into contact with floodwaters.",
			"Check for structural damage before entering your home.",
			"Be cautious of electrical hazards and potential gas leaks.",
			"Clean and disinfect items that came into contact with floodwater.",
			"Contact your insurance provider to report flood damage and begin the claims process.",
			"Seek medical attention for injuries and illnesses, especially if you came into contact with floodwater.",
			"Cooperate with local authorities and follow any guidance for recovery efforts in your community.",
		],
		details:
			"The country experiences regular river flooding during the monsoon season, affecting both urban and rural areas. Flash floods, riverbank erosion, and monsoon rains contribute to the recurrent flooding.",
	},
	// // ----=----
	{
		title: "Riverbank Erosion",
		description: "River erosion, displacement",
		img: "/images/river-erosion.jpeg",
		coverImg: threatRiverbankErosion,
		slug: "riverbank-erosion",
		before: [
			"Stay informed about the risk of riverbank erosion in your area through local authorities and environmental agencies.",
			"Monitor weather forecasts and river levels to anticipate potential erosion events.",
			"Create an emergency kit with essential supplies, including water, non-perishable food, medications, flashlight, batteries, important documents, and first aid supplies.",
			"Know the evacuation routes and emergency shelters in case of riverbank erosion.",
			"Secure important documents in a waterproof container and keep them easily accessible.",
			"Stay updated on early warning systems and alerts related to riverbank erosion.",
			"Work with local authorities and community organizations to implement preventive measures.",
		],
		during: [
			"Follow evacuation orders immediately if issued by local authorities.",
			"Move to higher ground and away from riverbanks and areas prone to erosion.",
			"Avoid crossing or attempting to navigate through eroded riverbanks.",
			"Listen to emergency broadcasts for up-to-date information and instructions.",
			"Stay in contact with neighbors and community members to ensure their safety.",
			"Be prepared for potential road closures and transportation disruptions.",
			"Follow official instructions and guidance from emergency services and authorities.",
		],
		after: [
			"Wait for authorities to declare it safe before returning to your home or area.",
			"Assess the damage to your property but do so carefully, especially if there is instability in the area.",
			"Document the erosion and damage with photographs for insurance claims.",
			"Check for structural damage before entering your home.",
			"Be cautious of unstable ground and potential hazards in the aftermath of riverbank erosion.",
			"Contact your insurance provider to report damage and begin the claims process.",
			"Cooperate with local authorities and follow any guidance for recovery efforts in your community.",
			"Participate in community efforts to address the impact of riverbank erosion and support affected neighbors.",
		],
		details:
			"Bangladesh has numerous rivers, and riverbank erosion is a significant issue. It displaces communities, destroys agricultural land, and poses a threat to infrastructure.",
	},
	{
		title: "Drought",
		description: "Water scarcity, agricultural impact",
		img: "/images/drought.jpeg",
		coverImg: threatDrought,
		before: [
			"Stay informed about drought conditions in your area through local weather forecasts, climate reports, and water agencies.",
			"Conserve water by fixing leaks, using water-efficient appliances, and practicing water-saving habits.",
			"Create a drought-tolerant landscape around your home by choosing water-efficient plants and implementing efficient irrigation practices.",
			"Develop a water conservation plan for your household, including guidelines for water usage during drought conditions.",
			"Educate yourself about local water restrictions and guidelines for water conservation.",
			"Prepare an emergency kit with essential supplies, including non-perishable food, medications, and other necessities.",
			"Work with local authorities and community organizations to implement water-saving initiatives.",
		],
		during: [
			"Follow local water restrictions and guidelines for water conservation.",
			"Conserve water by reducing unnecessary water usage, such as limiting lawn irrigation and taking shorter showers.",
			"Stay informed about drought-related developments and updates from local authorities.",
			"Implement your household water conservation plan, emphasizing responsible water usage.",
			"Support community-wide efforts to save water and raise awareness about drought conditions.",
			"Be mindful of water sources and participate in community initiatives to preserve water quality.",
		],
		after: [
			"Continue to follow water conservation practices even after the drought period ends.",
			"Assess and repair any water leaks or inefficiencies in your home or property.",
			"Participate in community efforts for water conservation and sustainable water management.",
			"Educate others about the importance of water conservation and sustainable water use.",
			"Work with local authorities and community organizations to develop long-term strategies for drought resilience.",
			"Consider implementing permanent changes to your landscaping and water use practices to be more drought-resistant.",
			"Stay informed about water supply conditions and drought preparedness for future occurrences.",
		],
		slug: "drought",
		details:
			"Certain regions of Bangladesh can experience drought conditions, affecting agriculture and water supply.",
	},
	{
		title: "Tornado",
		description: "High winds, localized damage",
		img: "/images/tornado.jpeg",
		coverImg: threatTornado,
		before: [
			"Stay informed about tornado risks in your area through local weather forecasts and alerts.",
			"Create and practice a tornado emergency plan with your family, including identifying safe locations within your home.",
			"Assemble an emergency kit with essential supplies, including water, non-perishable food, medications, flashlight, batteries, important documents, and first aid supplies.",
			"Know the location of designated tornado shelters in your community.",
			"Secure outdoor objects that could become projectiles in high winds.",
			"Install a NOAA Weather Radio or use a reliable weather app to receive tornado warnings.",
			"Stay informed about tornado watches and warnings through local news and emergency broadcasts.",
		],
		during: [
			"Take shelter immediately if a tornado warning is issued or if you observe threatening weather conditions.",
			"Move to the lowest level of a sturdy building, preferably a basement, or an interior room on the lowest floor, away from windows.",
			"Avoid windows and cover yourself with a mattress or heavy blankets for protection.",
			"If you are in a mobile home or vehicle, abandon it and seek shelter in a nearby building or designated storm shelter.",
			"Listen to a battery-powered weather radio or a reliable weather app for updates and instructions.",
			"Do not attempt to outrun a tornado in your vehicle; instead, find a sturdy building for shelter.",
		],
		after: [
			"Wait for authorities to declare it safe before leaving your shelter.",
			"Be cautious of downed power lines, debris, and other hazards when assessing damage or providing assistance.",
			"Check yourself and others for injuries and seek medical attention if needed.",
			"Use flashlights rather than candles to avoid fire hazards when inspecting your home for damage.",
			"Contact loved ones to let them know you are safe and inquire about their well-being.",
			"Follow instructions from emergency responders and authorities regarding evacuation or other post-tornado actions.",
			"Document damage with photographs for insurance claims.",
			"Assist neighbors and community members as needed, especially those who may require help.",
			"Stay informed about recovery efforts and community resources.",
		],
		slug: "tornado",
		details:
			"Although less common than cyclones, tornadoes can occur and cause localized damage.",
	},
	{
		title: "Landslide",
		description: "Slope failure, hilly terrain",
		img: "/images/landslide.jpeg",
		coverImg: threatLandslide,
		before: [
			"Stay informed about landslide risks in your area through local geological reports, weather forecasts, and alerts.",
			"Identify and be aware of potential landslide-prone areas near your home and workplace.",
			"Create an emergency kit with essential supplies, including water, non-perishable food, medications, flashlight, batteries, important documents, and first aid supplies.",
			"Implement erosion control measures, such as planting vegetation and installing retaining walls, to help stabilize slopes.",
			"Secure outdoor items and equipment that could be at risk of causing or being affected by a landslide.",
			"Know the evacuation routes and locations of safe shelters in case of a landslide.",
			"Stay informed about rainfall patterns and be cautious during periods of heavy or prolonged rain.",
		],
		during: [
			"Evacuate immediately if you are in an area prone to landslides and receive an evacuation order.",
			"Move to higher ground and away from the path of the landslide, avoiding river valleys and low-lying areas.",
			"Avoid driving through areas that may be at risk of landslides, especially during heavy rain or after earthquakes.",
			"Listen to emergency broadcasts and updates for information and instructions.",
			"If inside a building during a landslide, move to an upper floor, the roof, or a location away from windows and doors.",
			"Stay alert for signs of landslides, such as unusual sounds, cracking of the ground, or sudden changes in water flow.",
		],
		after: [
			"Wait for authorities to declare it safe before returning to your home or the affected area.",
			"Be cautious of additional landslides, especially during the post-event period.",
			"Inspect your property for signs of instability, such as tilting trees or changes in the landscape.",
			"Document damage with photographs for insurance claims.",
			"Check yourself and others for injuries and seek medical attention if needed.",
			"Contact loved ones to let them know you are safe and inquire about their well-being.",
			"Cooperate with local authorities and follow any guidance for recovery efforts in your community.",
			"Participate in community efforts for cleanup, restoration, and landslide mitigation.",
			"Consider professional assessments and engineering solutions to reduce future landslide risks.",
		],
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
	{ text: "tornado", img: "/images/tornado.png" },
	{ text: "wild-fire", img: "/images/wild-fire.png" },
	{ text: "cyclone", img: "/images/cyclone.png" },
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
		img: "/images/news.jpg",
	},
	{
		heading: "Project-2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit, cumque expedita veniam tempora optio deleniti quam omnis, ut rerum voluptas nesciunt sit et quisquam enim amet sint laudantium id.",
		img: "/images/news-2.png",
	},
	{
		heading: "Project-3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit, cumque expedita veniam tempora optio deleniti quam omnis, ut rerum voluptas nesciunt sit et quisquam enim amet sint laudantium id.",
		img: "/images/news-3.jpg",
	},
];

export const demoNews: Card[] = [
	{
		heading: "News-1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit, cumque expedita veniam tempora optio deleniti quam omnis, ut rerum voluptas nesciunt sit et quisquam enim amet sint laudantium id.",
		img: "/images/news-2.png",
	},
	{
		heading: "News-2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit, cumque expedita veniam tempora optio deleniti quam omnis, ut rerum voluptas nesciunt sit et quisquam enim amet sint laudantium id.",
		img: "/images/news-3.jpg",
	},
	{
		heading: "News-3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit, cumque expedita veniam tempora optio deleniti quam omnis, ut rerum voluptas nesciunt sit et quisquam enim amet sint laudantium id.",
		img: "/images/news.jpg",
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
		image: "/images/org.png",
	},
	{
		name: "Org 2",
		username: "org-2",
		bio: "Your trusted source for disaster preparedness resources. We're committed to helping you prepare for, respond to, and recover from disasters and emergencies. Explore our guides and expert advice to build resilience and reduce the impact of crises. Join us in creating a safer, more secure future.",
		image: "/images/org.png",
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

export interface ITeamData {
	id: number;
	name: string;
	image: string;
	title: string;
	fb: string;
	wp: string;
	gh: string;
	email: string;
}

export const teamData = [
	{
		id: 1,
		name: "Sharif Md. Minhaz",
		image: "https://utfs.io/f/0afe6292-2e46-475c-83a1-470c1d875f5e-dqj3vp.jpg",
		title: "Web Developer",
		fb: "https://www.facebook.com/sharif.mdminhaz",
		wp: "whatsapp://send?phone=+8801308673831",
		gh: "https://github.com/Sharif-Minhaz",
		email: "smmr.career@gamail.com",
	},
];
