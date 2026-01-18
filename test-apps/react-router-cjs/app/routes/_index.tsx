import type { MetaFunction } from "react-router";
import { useGoBack } from "use-go-back";

export const meta: MetaFunction = () => {
  return [{ title: "React Router Test App - use-go-back" }, { name: "description", content: "Test app for use-go-back hook" }];
};

export default function Index() {
  const goBack = useGoBack({ targetPathname: "/" });

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>React Router Test App</h1>
      <p>This is a test app for the use-go-back package.</p>
      <button onClick={goBack} style={{ padding: "0.5rem 1rem", marginTop: "1rem", cursor: "pointer" }}>
        Back to Home
      </button>
    </div>
  );
}
