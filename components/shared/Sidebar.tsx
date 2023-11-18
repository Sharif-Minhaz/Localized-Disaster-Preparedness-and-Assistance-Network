"use client";

import { sideMenuData } from "@/constants";
import { MainContext } from "@/contexts/MainContext";
import { dictionary } from "@/locales/contents";
import { OrganizationSwitcher, SignOutButton } from "@clerk/nextjs";
import { Switch } from "../ui/switch";
import { LogOut, Moon } from "lucide-react";
import { useContext } from "react";
import { Label } from "../ui/label";
import { dark } from "@clerk/themes";

export default function Sidebar() {
	const { lang, theme, changeTheme } = useContext(MainContext);

	return (
		<aside>
			<OrganizationSwitcher
				appearance={{
					elements: {
						organizationSwitcherTrigger: "py-2 px-4",
					},
					baseTheme: theme === "dark" ? dark : undefined,
				}}
			/>
			<ul>
				{sideMenuData.map((menu) => {
					const { Icon } = menu;
					const selectedLangEntry = dictionary?.[lang];
					return (
						<li key={menu.title}>
							<a href={menu.url}>
								<div>
									<Icon />
									{/* @ts-ignore */}
									<span>{selectedLangEntry?.[menu?.title]}</span>
								</div>
							</a>
						</li>
					);
				})}
			</ul>
			<div>
				<hr />
				<div>
					<SignOutButton>
						<div className="flex cursor-pointer">
							<LogOut />
							<span>{dictionary[lang]?.["logout"]}</span>
						</div>
					</SignOutButton>
				</div>
				<div>
					<Moon />
					<div className="flex items-center space-x-2">
						<Label htmlFor="dark-mode">{dictionary[lang]?.["darkMode"]}</Label>
						<Switch
							id="dark-mode"
							checked={theme === "dark"}
							onCheckedChange={changeTheme}
						/>
					</div>
				</div>
			</div>
		</aside>
	);
}
