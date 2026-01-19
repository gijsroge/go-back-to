import { Link, useLocation, useNavigate } from "react-router";
import { goBackTo } from "go-back-to";

interface Tab {
	label: string;
	path: string;
}

interface DetailHeaderProps {
	tabs: Tab[];
}

export function DetailHeader({ tabs }: DetailHeaderProps) {
	const location = useLocation();
	const navigate = useNavigate();
	const currentPath = location.pathname;

	return (
		<>
			<button
				onClick={() => goBackTo({ targetPathname: "/", fallbackCallback: () => navigate("/") })}
				style={{
					padding: "0.5rem 1rem",
					background: "transparent",
					color: "#666",
					border: "1px solid #e0e0e0",
					borderRadius: "4px",
					cursor: "pointer",
					fontSize: "0.9rem",
					marginBottom: "1.5rem",
					display: "flex",
					alignItems: "center",
					gap: "0.5rem",
				}}
			>
				← Back to Home
			</button>

			<div
				style={{
					display: "flex",
					gap: "0.5rem",
					borderBottom: "2px solid #e0e0e0",
					marginBottom: "2rem",
				}}
			>
				{tabs.map((tab) => {
					const isActive = currentPath === tab.path;
					return (
						<Link
							key={tab.path}
							to={tab.path}
							style={{
								padding: "0.75rem 1.5rem",
								textDecoration: "none",
								color: isActive ? "#007bff" : "#666",
								borderBottom: isActive ? "2px solid #007bff" : "2px solid transparent",
								marginBottom: "-2px",
								fontWeight: isActive ? "600" : "400",
								transition: "color 0.2s",
							}}
						>
							{tab.label}
						</Link>
					);
				})}
			</div>
		</>
	);
}
