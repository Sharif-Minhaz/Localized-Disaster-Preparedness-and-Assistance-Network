"use client";

import { createContext, useState } from "react";
// import { useLocalStorage } from "../hooks/useLocalStorage";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
	const [lang, setLang] = useState("en");

	const handleLang = () => {
		setLang(lang === "en" ? "bn" : "en");
	};

	return <MainContext.Provider value={{ lang, handleLang }}>{children}</MainContext.Provider>;
};
