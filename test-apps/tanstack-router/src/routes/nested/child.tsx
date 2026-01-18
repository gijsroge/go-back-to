import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/nested/child")({
	component: ChildComponent,
});

function ChildComponent() {
	return (
		<div
			style={{
				background: "#fff",
				padding: "2rem",
				borderRadius: "8px",
				boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
			}}
		>
			<h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#333" }}>
				Child Route
			</h2>
			<p style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#666" }}>
				You are now on a nested child route. The "Back to Home" button in the header will
				navigate back to the home page ("/") while preserving scroll position, even though
				you navigated through multiple nested routes.
			</p>
			<p style={{ color: "#666" }}>
				This demonstrates how the <code>useGoBack</code> hook can find the closest matching
				pathname in history, regardless of how many intermediate routes you've navigated
				through.
			</p>

			{/* Add some content to make the page scrollable */}
			<div style={{ marginTop: "3rem" }}>
				<h3 style={{ marginBottom: "1rem" }}>Scroll Test Content</h3>
				{Array.from({ length: 15 }, (_, i) => (
					<p key={i} style={{ marginBottom: "1rem", color: "#666" }}>
						This is paragraph {i + 1} in the child route. Scroll down and then use the
						back button to test scroll position preservation.
					</p>
				))}
			</div>
		</div>
	);
}
