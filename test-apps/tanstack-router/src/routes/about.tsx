import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: AboutComponent,
});

function AboutComponent() {
	return (
		<div style={{ maxWidth: "800px", margin: "0 auto" }}>
			<h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>About</h1>
			<p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#666" }}>
				This is the About page. Use the "Back to Home" button in the header to navigate back
				to the home page.
			</p>

			<div
				style={{
					background: "#fff",
					padding: "2rem",
					borderRadius: "8px",
					boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
					marginBottom: "2rem",
				}}
			>
				<h2 style={{ marginBottom: "1rem", color: "#333" }}>About use-go-back</h2>
				<p style={{ marginBottom: "1rem", color: "#666" }}>
					The <code>use-go-back</code> hook is a React hook that allows you to create a
					back button that navigates to a specific route in browser history while
					preserving scroll position.
				</p>
				<p style={{ color: "#666" }}>
					It uses the Navigation API to find the closest matching history entry and
					navigates back to it, which automatically restores scroll position.
				</p>
			</div>

			<Link
				to="/"
				style={{
					display: "inline-block",
					padding: "0.75rem 1.5rem",
					background: "#007bff",
					color: "white",
					textDecoration: "none",
					borderRadius: "4px",
				}}
			>
				Go to Home
			</Link>
		</div>
	);
}
