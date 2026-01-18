import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<div style={{ minHeight: "100vh" }}>
			<main style={{ padding: "2rem" }}>
				<Outlet />
			</main>
		</div>
	);
}
