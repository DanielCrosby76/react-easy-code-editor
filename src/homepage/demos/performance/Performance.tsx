import { useContext, useState } from "react";
import EasyCodeEditor, { DefaultDark, DefaultLight } from "../../../lib/exports";
import largeFile from "./largeFile";
import { ThemeContext } from "../../App";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "./performance.css";

export default () => {
  const [code, setCode] = useState(largeFile);
  const theme = useContext(ThemeContext);
  return (
    <div id="performance">
      <div id="performance-container">
        <div id="performance-info">
          <h1>Performance First.</h1>
          <p id="performance-info-p">
            Highlight thousands of code lines efficiently, using some of your favourite libraries
            such as{" "}
            <a className="performance-link" href="https://prismjs.com/">
              prism.js
            </a>
            ,{" "}
            <a className="performance-link" href="https://highlightjs.org/">
              highlight.js
            </a>{" "}
            or through a custom function.
          </p>
        </div>
        <div id="performance-editor">
          <EasyCodeEditor
            value={code}
            onChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.js)}
            theme={theme === "dark" ? DefaultDark : DefaultLight}
          />
        </div>
      </div>
    </div>
  );
};
