"use client";

import { sideMenuData } from "@/constants";
import { MainContext } from "@/contexts/MainContext";
import { dictionary } from "@/locales/contents";
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import { Switch } from "../ui/switch";
import { LogOut, Moon, AlignRight } from "lucide-react";
import { useContext } from "react";
import { Label } from "../ui/label";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import OutsideClickHandler from "react-outside-click-handler";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: -20,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

export default function Sidebar() {
	const { lang, theme, sidebarOpen, closeSidebar, changeTheme } = useContext(MainContext);
	const pathname = usePathname();

	return (
		<OutsideClickHandler onOutsideClick={closeSidebar}>
			<aside
				className={`fixed bg-cover bg-[url(/assets/images/sidebar-bg.jpeg)] ${
					sidebarOpen ? "left-0" : "lg:left-0 -left-[280px]"
				} transition-all top-0 z-20 flex h-screen w-[255px] flex-col justify-between overflow-auto border-r`}
			>
				<div className="flex flex-col dark:bg-black/75 bg-white/40 pb-5">
					<div className="px-4 pt-5 pb-3">
						<div className="flex gap-3">
							<Link href="/">
								<Image
									draggable={false}
									src="/assets/images/brand.png"
									width={45}
									height={45}
									alt="brand"
								/>
							</Link>
							<div className="flex flex-col gap-0">
								<h1>LDPAN</h1>
								<small className="text-xs">We&apos;re with you</small>
							</div>
						</div>
					</div>

					<div className="px-4 py-2">
						<OrganizationSwitcher
							appearance={{
								elements: {
									organizationSwitcherTrigger: "py-2 px-4",
								},
							}}
						/>
					</div>

					<ul>
						{sideMenuData.map((menu, index) => {
							const { Icon } = menu;
							const selectedLangEntry = dictionary?.[lang];
							const isActive =
								pathname.includes(menu.url) &&
								(menu.url.length > 1 || pathname === menu.url);
							return (
								<motion.li
									variants={fadeInAnimationVariants}
									initial="initial"
									animate="animate"
									custom={index}
									key={menu.title}
									className="px-4 py-1"
								>
									<Link
										href={menu.url}
										className={`flex px-4 py-3 gap-2 rounded-[8px] dark:text-white ${
											isActive ? "text-slate-200 bg-[#2563eb]" : "text-black"
										}`}
									>
										<Icon />
										{/* @ts-ignore */}
										<span>{selectedLangEntry?.[menu?.title]}</span>
									</Link>
								</motion.li>
							);
						})}
					</ul>
					<hr className="my-3" />
					<div className="px-4">
						<SignedIn>
							<div className="mb-3 md:block hidden">
								<SignOutButton>
									<div className="flex cursor-pointer px-4 py-3 gap-2">
										<LogOut />
										<span>{dictionary[lang]?.["logout"]}</span>
									</div>
								</SignOutButton>
							</div>
						</SignedIn>
						<div className="flex gap-2 px-4 py-3 mb-10 dark:bg-[#19191a] bg-white rounded-lg">
							<Moon />
							<div className="flex items-center justify-between space-x-2 w-full">
								<Label className="cursor-pointer" htmlFor="dark-mode">
									{dictionary[lang]?.["darkMode"]}
								</Label>
								<Switch
									id="dark-mode"
									checked={theme === "dark"}
									onCheckedChange={changeTheme}
								/>
							</div>
						</div>
					</div>
				</div>
				<span
					onClick={closeSidebar}
					className="absolute lg:hidden dark:bg-[#19191a] bg-white rounded-lg cursor-pointer right-4 top-4 inline-flex px-2 py-1"
				>
					<AlignRight />
				</span>
			</aside>
		</OutsideClickHandler>
	);
}
