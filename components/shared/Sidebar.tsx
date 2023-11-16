import { sideMenuData } from "@/constants";
import { dictionary } from "@/locales/contents";
import { OrganizationSwitcher } from "@clerk/nextjs";

export default function Sidebar() {
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
					const selectedLangEntry = dictionary.en;
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
