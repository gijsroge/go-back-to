# go-back-to

A lightweight TypeScript utility that navigates back to a specific route in browser history using the Navigation API, preserving scroll position.

Perfect for when you have a back button in your layout that needs to return users to an overview page preserving url state & scroll position, even after they've navigated through multiple nested routes. It uses the Navigation API to calculate how many steps back in the History it has to go to reach the targetPathname.

<img src="./docs/assets/demo.gif" alt="go-back-to demo" width="350" />

## Features

- 🎯 Navigate back to a specific pathname in history
- 📜 Preserves scroll position automatically (thanks to Navigation API)
- 🔍 Flexible pathname matching (exact string or custom function)
- 🔄 Graceful fallback when Navigation API is not available
- 📦 Zero dependencies
- 🎨 Full TypeScript support
- ⚛️ Works with any framework (React, Vue, Svelte, vanilla JS, etc.)

## Installation

```bash
npm install go-back-to
# or
pnpm add go-back-to
# or
yarn add go-back-to
```

## Usage

### Basic Example

```ts
import { goBackTo } from "go-back-to";

// Navigate back to the home page using the Navigation API preserving url state & scroll position
goBackTo({ targetPathname: "/" });
```

## How It Works

1. **Navigation API**: The function uses the native browser [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API) to access browser history entries. Because it relies on the browser's native API rather than framework-specific routing, it works with any framework.
2. **History Search**: It searches backwards through history to find the closest entry matching your target pathname.
3. **Navigation via history.go()**: Once the matching entry is found, it uses `window.history.go(-stepsBack)` to navigate. This approach has key advantages:
   - **Preserves scroll position**: The browser automatically restores the exact scroll position you were at, which is perfect for nested routes and long pages.
   - **Preserves page state**: Unlike `window.location.href`, using `history.go()` maintains the page's JavaScript state, form inputs, and component state.
4. **Fallback**: If the Navigation API is not available or no matching entry is found, it falls back to the provided `fallbackUrl`, or uses `targetPathname` if it's a string, or uses `history.back()`.

## More Examples

### With Custom Pathname Matcher

This will loop through all NavigationHistoryEntry items backwards until you return true. The matcher function receives the full URL object, allowing you to check pathname, search params, origin, and more.

```ts
import { goBackTo } from "go-back-to";

// Go back to a search page
goBackTo({
  targetPathname: (url) =>
    url.pathname.startsWith("/search"),
});
```

### With Fallback URL

The `fallbackUrl` is only needed when using a custom pathname matcher function and you want to support browsers that don't support the Navigation API. When `targetPathname` is a string, it will automatically be used as the fallback URL if the Navigation API is unavailable or no matching entry is found.

```ts
import { goBackTo } from "go-back-to";

// When using a custom matcher, provide fallbackUrl for browsers without Navigation API support
goBackTo({
  targetPathname: (url) => url.pathname.startsWith("/dashboard"),
  fallbackUrl: "/dashboard", // Used if Navigation API is unavailable or no match found
});
```

### With Fallback Callback (Framework Navigation)

When using with React Router, Next.js, or other frameworks, use `fallbackCallback` to navigate using their router instead of directly setting `window.location.href`:

```ts
import { goBackTo } from "go-back-to";
import { useNavigate } from "react-router"; // or your framework's navigation

const navigate = useNavigate();

goBackTo({
  targetPathname: "/",
  fallbackCallback: () => navigate("/"), // Uses React Router navigation
});
```

### Advanced: Match by Search Params

```ts
import { goBackTo } from "go-back-to";

// Go back to any page with a specific search param
goBackTo({
  targetPathname: (url) => url.searchParams.has("filter"),
});
```

## Usage with Next.js

Since `goBackTo` is a plain function, you can use it directly in event handlers. For Next.js App Router, use `fallbackCallback` with the router:

```tsx
import { goBackTo } from "go-back-to";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() =>
        goBackTo({
          targetPathname: "/",
          fallbackCallback: () => router.push("/"),
        })
      }
    >
      Go to Home
    </button>
  );
}
```

## API

### `goBackTo(options?)`

Navigates back to the target route in browser history.

#### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `targetPathname` | `string \| ((url: URL) => boolean)` | `"/"` | The target pathname to go back to. Can be an exact string match or a custom matcher function that receives the full URL object. |
| `fallbackUrl` | `string` | `undefined` | Fallback URL to navigate to if Navigation API is not available and no matching history entry is found. |
| `fallbackCallback` | `() => void` | `undefined` | Callback function to call instead of directly setting `window.location.href`. Useful for framework-specific navigation (e.g., React Router, Next.js). You should handle the navigation logic and URL determination within this callback. |

#### Returns

`void`

## Browser Support

The function works in all modern browsers. For browsers that don't support the Navigation API, it gracefully falls back to using `window.location.href` or `history.back()`.

See [Navigation API browser support](https://caniuse.com/wf-navigation) on Can I Use for detailed compatibility information.

## Development

This is a monorepo using pnpm workspaces. To develop:

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Start dev mode (watch mode)
pnpm run dev
```

### Test Apps

There are test apps available to test the function with different routers:

- `test-apps/react-router-esm` - React Router (ESM)
- `test-apps/tanstack-router` - TanStack Router

To run a test app:

```bash
cd test-apps/tanstack-router
pnpm dev
```

## License

MIT
