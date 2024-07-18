import React from "react";
import ReactDOM from "react-dom/client";
import { EasyCodeEditor } from "react-easy-code-editor";

const FullScreenEditor = () => {
  // Alternativly apply styles in a css file
  document.body.style.margin = "0px";
  document.getElementById("root").style.height = "100vh";
  return <EasyCodeEditor />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FullScreenEditor />
  </React.StrictMode>
);
