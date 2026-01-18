import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { useGoBack } from "use-go-back";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const goBack = useGoBack({ targetPathname: "/" });

	return (
		<div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
			<header
				style={{
					background: "#fff",
					borderBottom: "1px solid #e0e0e0",
					padding: "1rem 2rem",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
					<Link
						to="/"
						style={{
							textDecoration: "none",
							color: "#333",
							fontWeight: "bold",
							fontSize: "1.2rem",
						}}
					>
						Home
					</Link>
					<Link
						to="/about"
						style={{
							textDecoration: "none",
							color: "#666",
							padding: "0.5rem 1rem",
							borderRadius: "4px",
							transition: "background 0.2s",
						}}
					>
						About
					</Link>
					<Link
						to="/nested"
						style={{
							textDecoration: "none",
							color: "#666",
							padding: "0.5rem 1rem",
							borderRadius: "4px",
							transition: "background 0.2s",
						}}
					>
						Nested Routes
					</Link>
				</nav>
				<button
					onClick={goBack}
					style={{
						padding: "0.5rem 1rem",
						background: "#007bff",
						color: "white",
						border: "none",
						borderRadius: "4px",
						cursor: "pointer",
						fontSize: "0.9rem",
						fontWeight: "500",
					}}
				>
					← Back to Home
				</button>
			</header>
			<main style={{ flex: 1, padding: "2rem" }}>
				<Outlet />
			</main>
		</div>
	);
}
