import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/nested")({
	component: NestedComponent,
});

function NestedComponent() {
	return (
		<div style={{ maxWidth: "800px", margin: "0 auto" }}>
			<h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>
				Nested Routes
			</h1>
			<p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#666" }}>
				This page demonstrates nested routing. Navigate to the child route and use the back
				button to return to the home page.
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
				<Link
					to="/nested/child"
					style={{
						display: "inline-block",
						padding: "0.75rem 1.5rem",
						background: "#28a745",
						color: "white",
						textDecoration: "none",
						borderRadius: "4px",
					}}
				>
					Go to Child Route
				</Link>
			</div>

			<Outlet />
		</div>
	);
}
