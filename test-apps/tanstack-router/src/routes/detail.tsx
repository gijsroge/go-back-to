import { createFileRoute } from "@tanstack/react-router";
import { DetailHeader } from "../components/DetailHeader";

export const Route = createFileRoute("/detail")({
	component: DetailComponent,
});

function DetailComponent() {
	const tabs = [
		{ label: "Overview", path: "/detail" },
		{ label: "Details", path: "/detail/info" },
		{ label: "More", path: "/detail/more" },
	];

	return (
		<div style={{ maxWidth: "800px", margin: "0 auto" }}>
			<DetailHeader tabs={tabs} />

			<div>
				<h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>Overview</h1>
				<p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#666" }}>
					This is the overview page. Use the tabs above to navigate between different sections.
				</p>
				{Array.from({ length: 20 }, (_, i) => (
					<div
						key={i}
						style={{
							background: "#fff",
							padding: "2rem",
							borderRadius: "8px",
							boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
							marginBottom: "2rem",
						}}
					>
						<h3 style={{ marginBottom: "1rem", color: "#333" }}>Section {i + 1}</h3>
						<p style={{ color: "#666" }}>
							Scroll down to test scroll position preservation. Navigate between tabs and use
							the back button to return home.
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
