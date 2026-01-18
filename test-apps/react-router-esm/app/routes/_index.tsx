import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "React Router Test App - use-go-back" }, { name: "description", content: "Test app for use-go-back hook" }];
};

import { Link } from "react-router";

export default function Index() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", lineHeight: "1.2", marginBottom: "1rem", color: "#333" }}>
        Welcome to React Router
      </h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "3rem", color: "#666" }}>
        Click on a link below to navigate to the detail page. Use the back button and tabs to test scroll position preservation.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
        {Array.from({ length: 20 }, (_, i) => (
          <Link
            key={i}
            to="/detail"
            style={{
              display: "block",
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "#007bff",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              {i + 1}
            </div>
            <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#333" }}>
              Link {i + 1}
            </h2>
            <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: "1.5" }}>
              Click to navigate to the detail page
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
