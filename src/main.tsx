import React from "react";
import ReactDOM from "react-dom/client";
import { EasyEditor } from "./lib";

const App = () => {
  const [code, setCode] = React.useState<string>(`console.log("Hello, World!");`);
  return (
    <div style={{ height: 300 }}>
      <EasyEditor value={code} onChange={setCode} placeholder="type some code..." />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
