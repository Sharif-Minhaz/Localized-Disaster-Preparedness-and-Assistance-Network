"use client";

import { sideMenuData } from "@/constants";
import { MainContext } from "@/contexts/MainContext";
import { dictionary } from "@/locales/contents";
import { OrganizationSwitcher, SignOutButton } from "@clerk/nextjs";
import { Switch } from "../ui/switch";
import { LogOut, Moon } from "lucide-react";
import { useContext } from "react";
import { Label } from "../ui/label";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const { lang, theme, changeTheme } = useContext(MainContext);
	const pathname = usePathname();

	return (
		<aside className="fixed bg-cover dark:bg-[url(https://img.freepik.com/free-vector/realistic-paper-style-abstract-ornamental-background_79603-2433.jpg?w=740&t=st=1700376609~exp=1700377209~hmac=1e6b147bfa278c85de39a59f858a21f9712e2ef20eb0a363b05bac163980adc9)] bg-[url(https://img.freepik.com/free-vector/larkspur-by-william-morris_53876-58889.jpg?w=740&t=st=1700375993~exp=1700376593~hmac=6ef33f0f0158910839173fdf5d4ea79e5cfc5520183eb53cfd866ac08dc996c4)] left-0 top-0 z-20 flex h-screen w-[255px] flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 max-md:hidden">
			<div className="flex flex-col bg-slate-900/10">
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
							<h1>LNDPAN</h1>
							<small>We&apos;re with you</small>
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
					{sideMenuData.map((menu) => {
						const { Icon } = menu;
						const selectedLangEntry = dictionary?.[lang];
						const isActive =
							pathname.includes(menu.url) &&
							(menu.url.length > 1 || pathname === menu.url);
						return (
							<li key={menu.title} className="px-4 py-1">
								<Link
									href={menu.url}
									className={`flex px-4 py-3 gap-2 rounded-[8px] ${
										isActive && "text-slate-200 bg-[#2563eb]"
									}`}
								>
									<Icon />
									{/* @ts-ignore */}
									<span>{selectedLangEntry?.[menu?.title]}</span>
								</Link>
							</li>
						);
					})}
				</ul>
				<hr className="my-3" />
				<div className="px-4">
					<div className="mb-3">
						<SignOutButton>
							<div className="flex cursor-pointer px-4 py-3 gap-2">
								<LogOut />
								<span>{dictionary[lang]?.["logout"]}</span>
							</div>
						</SignOutButton>
					</div>
					<div className="flex gap-2 px-4 py-3 dark:bg-[#1D1C1C] bg-[#efedff] rounded-lg">
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
		</aside>
	);
}
