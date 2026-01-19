export type PathnameMatcher = string | ((url: URL) => boolean)

export interface GoBackToOptions {
	/**
	 * The target pathname to go back to. Can be:
	 * - A string: exact pathname match (e.g., "/")
	 * - A function: custom matcher function that receives the full URL object (e.g., (url) => url.pathname === "/" || url.pathname.startsWith("/search") || url.searchParams.has("filter"))
	 * @default "/"
	 */
	targetPathname?: PathnameMatcher
	/**
	 * Fallback URL to navigate to if Navigation API is not available and no matching history entry is found
	 */
	fallbackUrl?: string
}

/**
 * Navigate back to a specific route in browser history.
 * Uses the Navigation API to find the closest matching history entry and navigates back to it,
 * which automatically restores scroll position.
 *
 * @param options - Configuration options
 *
 * @example
 * ```ts
 * // Go back to the index page
 * goBackTo({ targetPathname: "/" });
 *
 * // Go back to any search-related page
 * goBackTo({
 *   targetPathname: (url) => url.pathname.startsWith("/search")
 * });
 *
 * // Match based on search params or origin
 * goBackTo({
 *   targetPathname: (url) => url.origin === "https://app.example.com" || url.searchParams.has("filter")
 * });
 * ```
 */
export function goBackTo(options: GoBackToOptions = {}): void {
	const { targetPathname = "/", fallbackUrl } = options

	const matchesUrl = (url: URL): boolean => {
		if (typeof targetPathname === "string") {
			return url.pathname === targetPathname
		}
		return targetPathname(url)
	}

	// Check if Navigation API is available (not supported in Firefox/Safari)
	const nav = "navigation" in window ? window.navigation : undefined
	if (nav?.currentEntry) {
		const currentIndex = nav.currentEntry.index
		const entries = nav.entries()

		// Look backwards through history to find the closest matching entry
		for (let i = currentIndex - 1; i >= 0; i--) {
			const entry = entries[i]
			if (entry?.url) {
				const url = new URL(entry.url)
				// Check if this entry matches the target pathname
				if (matchesUrl(url)) {
					// Calculate how many steps back we need to go
					const stepsBack = currentIndex - i
					// Use browser navigation to go back, which restores scroll position
					window.history.go(-stepsBack)
					return
				}
			}
		}
	}

	// Fallback: if Navigation API is not available or no matching entry found
	// Use fallbackUrl if provided, otherwise use targetPathname if it's a string, otherwise use history.back()
	const finalFallback = fallbackUrl ?? (typeof targetPathname === "string" ? targetPathname : undefined)
	if (finalFallback) {
		window.location.href = finalFallback
	} else {
		window.history.back()
	}
}
