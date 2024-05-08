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
import { cn } from "@/lib/utils";

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
		<>
			<div
				className={cn(
					"lg:hidden block z-50 h-screen fixed w-full bg-black/80 top-0 left-0",
					{
						hidden: !sidebarOpen,
					}
				)}
			/>
			<OutsideClickHandler onOutsideClick={closeSidebar}>
				<div
					className={`fixed bg-cover bg-[url(/images/sidebar.webp)] ${
						sidebarOpen ? "left-0" : "lg:left-0 -left-[280px]"
					} transition-all top-0 z-50 flex h-screen w-[255px] flex-col justify-between overflow-auto sm:overflow-hidden sm:hover:overflow-auto border-r`}
				>
					<div className="flex flex-col pb-5">
						<div className="px-4 pt-3 pb-2 sm:pb-3 border-b border-b-slate-700">
							<Link
								className="flex items-center gap-2"
								aria-label="return to home"
								href="/"
								onClick={closeSidebar}
							>
								<Image
									draggable={false}
									src="/images/brand.png"
									width={32}
									height={32}
									alt="return to home"
								/>
								<p className="select-none text-[26px] font-medium text-slate-200 dark:text-slate-200">
									LDPAN
								</p>
							</Link>
						</div>

						<div className="px-4 py-2 mt-2 h-[65px]">
							<SignedIn>
								<UserStatus />
							</SignedIn>
							<SignedOut>
								<Button
									onClick={() => router.push("/sign-in")}
									className="flex w-full hover:bg-[#2a5177ca] bg-[#203e5cca] h-full items-center gap-4 rounded-[8px] border border-slate-900 px-3 py-2"
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
										viewport={{ once: true }}
										custom={index}
										key={menu.title}
										className="px-4 py-1"
									>
										<Link
											href={menu.url}
											className={`flex items-center px-4 py-3 gap-2 rounded-[8px] transition-all duration-200 hover:bg-[#203e5cca] ${
												isActive
													? "text-[#669df6] font-bold bg-[#203e5cca]"
													: "text-white/80"
											}`}
											onClick={closeSidebar}
										>
											<Icon size={20} />
											{/* @ts-ignore */}
											<span>{selectedLangEntry?.[menu?.title]}</span>
										</Link>
									</motion.li>
								);
							})}
						</ul>
						<div className="my-3 border-b border-slate-700" />
						<div className="px-4">
							<SignedIn>
								<div className="mb-3">
									<SignOutButton>
										<div className="flex items-center text-white/80 cursor-pointer px-4 py-3 gap-2">
											<LogOut size={20} />
											<span>{dictionary[lang]?.["signout"]}</span>
										</div>
									</SignOutButton>
								</div>
							</SignedIn>
							<div className="flex items-center gap-2 px-4 py-3 mb-10 border border-slate-900 bg-[#325980ca] text-white/80 rounded-xl">
								{theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
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
						className="absolute lg:hidden text-white/80 bg-[#203e5cca] rounded-lg cursor-pointer right-4 top-4 inline-flex px-2 py-1"
					>
						<AlignRight />
					</span>
				</div>
			</OutsideClickHandler>
		</>
	);
}
