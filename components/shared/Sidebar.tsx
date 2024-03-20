"use client";

import { adminSideMenuTitle, sideMenuData } from "@/constants";
import { MainContext } from "@/contexts/MainContext";
import { dictionary } from "@/locales/contents";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Switch } from "../ui/switch";
import { LogOut, Moon, AlignRight, Sun } from "lucide-react";
import { useContext } from "react";
import { Label } from "../ui/label";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import OutsideClickHandler from "react-outside-click-handler";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { UserStatus } from ".";

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

export default function Sidebar({ isAdmin }: { isAdmin?: boolean }) {
	const { lang, theme, sidebarOpen, closeSidebar, changeTheme } = useContext(MainContext);
	const pathname = usePathname();
	const router = useRouter();

	const sidebarMenuForUser = !isAdmin
		? sideMenuData.filter((data) => !adminSideMenuTitle.includes(data.title))
		: sideMenuData;

	return (
		<OutsideClickHandler onOutsideClick={closeSidebar}>
			<aside
				className={`fixed bg-cover bg-[url(/assets/images/sidebar-bg.webp)] ${
					sidebarOpen ? "left-0" : "lg:left-0 -left-[280px]"
				} transition-all top-0 z-30 flex h-screen w-[255px] flex-col justify-between overflow-auto sm:overflow-hidden sm:hover:overflow-auto border-r`}
			>
				<div className="flex flex-col dark:bg-black/75 bg-[#ffffffe0] pb-5">
					<div className="px-4 pt-5 pb-3">
						<div className="flex gap-3">
							<Link aria-label="return to home" href="/">
								<Image
									draggable={false}
									src="/assets/images/brand.png"
									width={45}
									height={45}
									alt="return to home"
								/>
							</Link>
							<div className="flex flex-col gap-0">
								<h1>LDPAN</h1>
								<small className="text-xs">We&apos;re with you</small>
							</div>
						</div>
					</div>

					<div className="px-4 py-2 h-[65px]">
						<SignedIn>
							<UserStatus />
						</SignedIn>
						<SignedOut>
							<Button
								onClick={() => router.push("/sign-in")}
								className="flex w-full dark:hover:bg-slate-900 hover:bg-slate-300 dark:text-slate-100 text-slate-800 h-full items-center gap-4 rounded-[8px] dark:bg-slate-800 bg-slate-100 border px-3 py-2"
							>
								Sign in now
							</Button>
						</SignedOut>
					</div>

					<ul className="mt-1">
						{sidebarMenuForUser.map((menu, index) => {
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
											isActive
												? "text-slate-100 bg-[#4485ef] shadow-md"
												: "text-black"
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
					<div className="my-3 border-b border-[#bed2ff] dark:border-slate-700" />
					<div className="px-4">
						<SignedIn>
							<div className="mb-3">
								<SignOutButton>
									<div className="flex cursor-pointer px-4 py-3 gap-2">
										<LogOut />
										<span>{dictionary[lang]?.["signout"]}</span>
									</div>
								</SignOutButton>
							</div>
						</SignedIn>
						<div className="flex gap-2 px-4 py-3 mb-10 border dark:bg-slate-900 bg-slate-100 rounded-xl">
							{theme === "dark" ? <Moon /> : <Sun />}
							<div className="flex items-center justify-between space-x-2 w-full">
								<Label className="cursor-pointer" htmlFor="dark-mode">
									{dictionary[lang]?.["changeMode"]}
								</Label>
								<Switch
									aria-label="change mode"
									role="switch"
									id="dark-mode"
									aria-checked={theme === "dark"}
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
