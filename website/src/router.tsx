import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// GitHub Pages base path
const base = '/go-back-to/'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    basepath: base,
    context: {},

    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })

  return router
}
