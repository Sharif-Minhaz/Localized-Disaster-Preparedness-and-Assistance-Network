"use client";

import { sideMenuData } from "@/constants";
import { MainContext } from "@/contexts/MainContext";
import { dictionary } from "@/locales/contents";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { useContext } from "react";

export default function Sidebar() {
	const { lang } = useContext(MainContext);

	return (
		<aside>
			<OrganizationSwitcher
				appearance={{
					elements: {
						organizationSwitcherTrigger: "py-2 px-4",
					},
				}}
			/>
			<ul>
				{sideMenuData.map((menu) => {
					const { Icon } = menu;
					const selectedLangEntry = dictionary[lang];
					return (
						<li key={menu.title}>
							<a href={menu.url}>
								<div>
									<Icon />
									{/* @ts-ignore */}
									<span>{selectedLangEntry[menu.title]}</span>
								</div>
							</a>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
