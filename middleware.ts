// Resource: https://clerk.com/docs/nextjs/middleware#auth-middleware
// Copy the middleware code as it is from the above resource

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	// An array of public routes that don't require authentication.
	publicRoutes: [
		"/",
		"/about",
		"/contact",
		"/threats",
		"/gallery",
		"/api/webhooks(.*)",
		"/api/uploadthing",
		"/api/sentry-example-api",
	],

	// An array of routes to be ignored by the authentication middleware.
	ignoredRoutes: ["/api/webhooks(.*)"],
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
