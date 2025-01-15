import { useLocation } from "react-router-dom";

function JsonPage() {
  const location = useLocation();
  const passwords = location.state?.passwords || [];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Passwords JSON</h1>
      <pre
        style={{
          fontFamily: "Arial, sans-serif",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
        }}
      >
        {JSON.stringify(passwords, null, 2)}
      </pre>
    </div>
  );
}

export default JsonPage;
