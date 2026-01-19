import { fileURLToPath } from "node:url"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import viteTsConfigPaths from "vite-tsconfig-paths"

import tailwindcss from "@tailwindcss/vite"

// GitHub Pages base path
const base = "/go-back-to/"

const config = defineConfig({
	base,
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	plugins: [
		devtools(),
		// this is the plugin that enables path aliases
		viteTsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
		tailwindcss(),
		tanstackStart({
			prerender: {
				// Enable prerendering
				enabled: true,
				// Enable if you need pages to be at `/page/index.html` instead of `/page.html`
				autoSubfolderIndex: true,
				// If disabled, only the root path or the paths defined in the pages config will be prerendered
				autoStaticPathsDiscovery: true,
				// How many prerender jobs to run at once
				concurrency: 14,
				// Whether to extract links from the HTML and prerender them also
				crawlLinks: true,
				// Number of times to retry a failed prerender job
				retryCount: 2,
				// Delay between retries in milliseconds
				retryDelay: 1000,
				// Maximum number of redirects to follow during prerendering
				maxRedirects: 5,
				// Fail if an error occurs during prerendering
				failOnError: true,
			},
		}),
		viteReact(),
	],
})

export default config
