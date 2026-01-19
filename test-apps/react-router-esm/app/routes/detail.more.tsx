import type { MetaFunction } from "react-router";
import { DetailHeader } from "../components/DetailHeader";

export const meta: MetaFunction = () => {
  return [{ title: "Detail More - React Router Test App" }, { name: "description", content: "Detail more page" }];
};

export default function DetailMore() {
  const tabs = [
    { label: "Overview", path: "/detail" },
    { label: "Details", path: "/detail/info" },
    { label: "More", path: "/detail/more" },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <DetailHeader tabs={tabs} />

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
