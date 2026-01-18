import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: IndexComponent,
});

function IndexComponent() {
	return (
		<div style={{ maxWidth: "800px", margin: "0 auto" }}>
			<h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>
				Welcome to TanStack Router
			</h1>
			<p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#666" }}>
				This is a test app for the <code>use-go-back</code> hook.
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
				<h2 style={{ marginBottom: "1rem", color: "#333" }}>Test the useGoBack Hook</h2>
				<p style={{ marginBottom: "1.5rem", color: "#666" }}>
					Navigate to nested routes and use the "Back to Home" button in the header to
					test the hook. The button will navigate back to this page while preserving scroll
					position.
				</p>

				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<Link
						to="/about"
						style={{
							display: "inline-block",
							padding: "0.75rem 1.5rem",
							background: "#007bff",
							color: "white",
							textDecoration: "none",
							borderRadius: "4px",
							textAlign: "center",
							width: "fit-content",
						}}
					>
						Go to About Page
					</Link>
					<Link
						to="/nested"
						style={{
							display: "inline-block",
							padding: "0.75rem 1.5rem",
							background: "#28a745",
							color: "white",
							textDecoration: "none",
							borderRadius: "4px",
							textAlign: "center",
							width: "fit-content",
						}}
					>
						Go to Nested Routes
					</Link>
				</div>
			</div>

			<div
				style={{
					background: "#fff",
					padding: "2rem",
					borderRadius: "8px",
					boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
				}}
			>
				<h3 style={{ marginBottom: "1rem", color: "#333" }}>How it works</h3>
				<ul style={{ paddingLeft: "1.5rem", color: "#666" }}>
					<li style={{ marginBottom: "0.5rem" }}>
						The <code>useGoBack</code> hook uses the Navigation API to find the closest
						matching route in history
					</li>
					<li style={{ marginBottom: "0.5rem" }}>
						When you navigate through nested routes, the back button will find the
						closest "/" entry
					</li>
					<li style={{ marginBottom: "0.5rem" }}>
						Scroll position is automatically preserved thanks to the Navigation API
					</li>
				</ul>
			</div>

			{/* Add some content to make the page scrollable */}
			<div style={{ marginTop: "3rem", padding: "2rem", background: "#fff", borderRadius: "8px" }}>
				<h3 style={{ marginBottom: "1rem" }}>Scroll Test Content</h3>
				{Array.from({ length: 20 }, (_, i) => (
					<p key={i} style={{ marginBottom: "1rem", color: "#666" }}>
						This is paragraph {i + 1}. Scroll down to test scroll position preservation
						when using the back button.
					</p>
				))}
			</div>
		</div>
	);
}
