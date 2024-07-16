import React from "react";
import ReactDOM from "react-dom/client";
import { EasyEditor } from "./lib";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div style={{ height: 300 }}>
      <EasyEditor />
    </div>
  </React.StrictMode>
);
