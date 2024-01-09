/** @type {import('next').NextConfig} */
const nextConfig = {
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
		],
	},
};

module.exports = nextConfig;
