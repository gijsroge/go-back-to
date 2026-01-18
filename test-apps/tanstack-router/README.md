# TanStack Router Test App

This is a test app for the `use-go-back` package using TanStack Router.

## Features

- Demonstrates the `useGoBack` hook with TanStack Router
- Shows how the hook preserves scroll position when navigating back
- Includes nested routes to test the hook's ability to find the closest matching pathname

## Getting Started

```bash
# Install dependencies
pnpm install

# Run the dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Testing useGoBack

1. Navigate to the home page and scroll down
2. Navigate to nested routes (e.g., `/nested` → `/nested/child`)
3. Use the "Back to Home" button in the header
4. The page should navigate back to "/" and restore your scroll position

## Routes

- `/` - Home page with scroll test content
- `/about` - About page
- `/nested` - Nested route parent
- `/nested/child` - Nested route child
