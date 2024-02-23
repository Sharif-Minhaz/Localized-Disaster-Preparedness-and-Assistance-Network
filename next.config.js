/** @type {import('next').NextConfig} */
const nextConfig = {
	// logging: {
	// 	fetches: {
	// 		fullUrl: true,
	// 	},
	// },
	i18n: {
		locales: ["en", "bn"],
		defaultLocale: "en",
	},
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
};

module.exports = nextConfig;
