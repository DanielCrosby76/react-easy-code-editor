import React from "react";
import ReactDOM from "react-dom/client";
import EasyCodeEditor from "react-easy-code-editor";

const ResizableEditor = () => {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        resize: "both",
        overflow: "auto",
      }}
    >
      <EasyCodeEditor />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResizableEditor />
  </React.StrictMode>
);
