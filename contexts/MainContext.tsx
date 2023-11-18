"use client";

import { createContext, useEffect, useState } from "react";

export const MainContext = createContext({
	lang: "",
	handleLang: () => {},
	changeTheme: () => {},
	theme: "",
});

export const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [lang, setLang] = useState("en");
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const savedLang = localStorage.getItem("lang");

		setLang(savedLang ? savedLang : "en");
		setTheme(savedTheme ? savedTheme : "light");
	}, []);

	useEffect(() => {
		localStorage.setItem("lang", lang);
		document.documentElement.lang = lang;
	}, [lang]);

	useEffect(() => {
		localStorage.setItem("theme", theme);
		if (theme === "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [theme]);

	const handleLang = () => {
		setLang(lang === "en" ? "bn" : "en");
	};

	const changeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<MainContext.Provider value={{ lang, handleLang, changeTheme, theme }}>
			{children}
		</MainContext.Provider>
	);
};
