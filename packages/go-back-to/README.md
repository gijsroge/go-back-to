# go-back-to

A lightweight TypeScript utility that navigates back to a specific route in browser history using the Navigation API, preserving scroll position.

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

// Navigate back to the home page
goBackTo({ targetPathname: "/" });
```

### With Custom Pathname Matcher

```ts
import { goBackTo } from "go-back-to";

// Go back to any search-related page
goBackTo({
  targetPathname: (url) => url.pathname.startsWith("/search"),
});
```

### With Fallback URL

```ts
import { goBackTo } from "go-back-to";

goBackTo({
  targetPathname: "/dashboard",
  fallbackUrl: "/dashboard", // Used if Navigation API is unavailable
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

## Usage with React

Since `goBackTo` is a plain function, you can use it directly in event handlers:

```tsx
import { goBackTo } from "go-back-to";

function BackButton() {
  return (
    <button onClick={() => goBackTo({ targetPathname: "/" })}>
      Go to Home
    </button>
  );
}
```

### Creating a Custom Hook

If you prefer a hook-based API, you can easily create a wrapper:

```tsx
import { useCallback } from "react";
import { goBackTo, type GoBackToOptions } from "go-back-to";

function useGoBackTo(options: GoBackToOptions = {}) {
  return useCallback(() => goBackTo(options), [options]);
}

// Usage
function MyComponent() {
  const handleGoBack = useGoBackTo({ targetPathname: "/" });

  return <button onClick={handleGoBack}>Back to Home</button>;
}
```

### With React Router

```tsx
import { goBackTo } from "go-back-to";

function DetailPage() {
  return (
    <div>
      <button onClick={() => goBackTo({ targetPathname: "/", fallbackUrl: "/" })}>
        Back to List
      </button>
      {/* ... rest of your component */}
    </div>
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

#### Returns

`void`

## How It Works

1. **Navigation API**: The function uses the native browser [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API) to access browser history entries. Because it relies on the browser's native API rather than framework-specific routing, it works with any framework.
2. **History Search**: It searches backwards through history to find the closest entry matching your target pathname.
3. **Scroll Preservation**: When using `window.history.go()`, the browser automatically restores the scroll position, which is perfect for nested routes.
4. **Fallback**: If the Navigation API is not available or no matching entry is found, it falls back to the provided `fallbackUrl`, or uses `targetPathname` if it's a string, or uses `history.back()`.

## Browser Support

The function works in all modern browsers. For browsers that don't support the Navigation API, it gracefully falls back to using `window.location.href` or `history.back()`.

## License

MIT
