/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
	dest: "public",
	disable: process.env.NODE_ENV === "development",
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	cacheStartUrl: true,
	dynamicStartUrl: true,
	dynamicStartUrlRedirect: "/sign-in",
	fallbacks: {
		document: "/~offline",
	},
	workboxOptions: {
		disableDevLogs: true,
	},
});

module.exports = withPWA({
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.clerk.dev",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "img.clerk.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "utfs.io",
				port: "",
				pathname: "/**",
			},
		],
	},
});
