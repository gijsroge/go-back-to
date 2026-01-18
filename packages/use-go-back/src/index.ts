import { useCallback } from "react"

type PathnameMatcher = string | ((pathname: string) => boolean)

interface UseGoBackOptions {
	/**
	 * The target pathname to go back to. Can be:
	 * - A string: exact pathname match (e.g., "/")
	 * - A function: custom matcher function (e.g., (pathname) => pathname === "/" || pathname.startsWith("/search"))
	 * @default "/"
	 */
	targetPathname?: PathnameMatcher
	/**
	 * Fallback URL to navigate to if Navigation API is not available and no matching history entry is found
	 */
	fallbackUrl?: string
}

/**
 * Hook that provides a function to navigate back to a specific route in browser history.
 * Uses the Navigation API to find the closest matching history entry and navigates back to it,
 * which automatically restores scroll position.
 *
 * @param options - Configuration options
 * @returns A function that navigates back to the target route
 *
 * @example
 * ```tsx
 * // Go back to the index page
 * const goBack = useGoBack({ targetPathname: "/" });
 *
 * // Go back to any search-related page
 * const goBack = useGoBack({
 *   targetPathname: (pathname) => pathname.startsWith("/search")
 * });
 *
 * // Use with a button
 * <Button onClick={goBack}>Back</Button>
 * ```
 */
export function useGoBack(options: UseGoBackOptions = {}) {
	const { targetPathname = "/", fallbackUrl } = options

	const matchesPathname = useCallback(
		(pathname: string): boolean => {
			if (typeof targetPathname === "string") {
				return pathname === targetPathname
			}
			return targetPathname(pathname)
		},
		[targetPathname]
	)

	const goBack = useCallback(() => {
		// Check if Navigation API is available
		// @ts-expect-error - Navigation API is not yet in all TypeScript definitions
		const nav = window.navigation
		if (nav && typeof nav === "object" && "currentEntry" in nav) {
			const currentIndex = nav.currentEntry?.index ?? -1
			const entries = nav.entries()

			// Look backwards through history to find the closest matching entry
			for (let i = currentIndex - 1; i >= 0; i--) {
				const entry = entries[i]
				if (entry) {
					const url = new URL(entry.url)
					// Check if this entry matches the target pathname
					if (matchesPathname(url.pathname)) {
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
	}, [matchesPathname, fallbackUrl, targetPathname])

	return goBack
}
