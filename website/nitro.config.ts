import { defineNitroConfig } from "nitro/config"

export default defineNitroConfig({
	preset: "static",
	// TanStack Start handles prerendering, so we disable Nitro's prerender
	prerender: {
		routes: [],
		crawlLinks: false,
	},
})
