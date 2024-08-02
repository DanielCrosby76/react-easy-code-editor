import { useState } from "react";
import EasyCodeEditor, { DefaultDark } from "../../../lib/exports";
import largeFile from "./largeFile";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "./performance.css";

export default () => {
  const [code, setCode] = useState(largeFile);
  return (
    <div id="performance">
        {/* <h1>Why?</h1> */}
      <div id="performance-container">
        <EasyCodeEditor
          value={code}
          onChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js)}
          theme={DefaultDark}
        />
      </div>
    </div>
  );
};
