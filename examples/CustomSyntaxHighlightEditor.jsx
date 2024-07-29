import React from "react";
import ReactDOM from "react-dom/client";
import EasyCodeEditor from "react-easy-code-editor";

const CustomSyntaxHighlightedEditor = () => {
  // This is a very basic example of a brainf**k highlighter
  // You can create a custom highlight function for any language
  // Note that highlighting must not affect text sizing in any way
  const customBFHighlight = (code) => {
    const highlightedCode = code
      .replaceAll(/[<>]/g, (match) => `<span style="color: purple">${match}</span>`)
      .replaceAll("+", `<span style="color: green">+</span>`)
      .replaceAll("-", `<span style="color: red">-</span>`)
      .replaceAll("[", `<span style="color: blue">[</span>`)
      .replaceAll("]", `<span style="color: blue">]</span>`)
      .replaceAll(",", `<span style="color: black">,</span>`)
      .replaceAll(".", `<span style="color: black">.</span>`);
    return `<span style="color: gray">${highlightedCode}</span>`;
  };
  return (
    <div style={{ width: 300, height: 300 }}>
      <EasyCodeEditor highlight={customBFHighlight} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomSyntaxHighlightedEditor />
  </React.StrictMode>
);
