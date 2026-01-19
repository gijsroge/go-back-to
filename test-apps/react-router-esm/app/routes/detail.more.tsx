import type { MetaFunction } from "react-router";
import { Link, useLocation } from "react-router";
import { goBackTo } from "go-back-to";

export const meta: MetaFunction = () => {
  return [{ title: "Detail More - React Router Test App" }, { name: "description", content: "Detail more page" }];
};

export default function DetailMore() {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    { label: "Overview", path: "/detail" },
    { label: "Details", path: "/detail/info" },
    { label: "More", path: "/detail/more" },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <button
        onClick={() => goBackTo({ targetPathname: "/" })}
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

      <div>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>More</h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#666" }}>
          This is the more page. Scroll down to test scroll position preservation.
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
            <h3 style={{ marginBottom: "1rem", color: "#333" }}>More Section {i + 1}</h3>
            <p style={{ color: "#666" }}>
              Navigate between tabs and use the back button to test scroll position preservation.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
