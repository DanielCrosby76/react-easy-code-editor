import { useState } from "react";
import EasyCodeEditor, { DefaultDark } from "../../../lib/exports";
import largeFile from "./largeFile";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import "./performance.css";

export default () => {
  const [code, setCode] = useState(largeFile);
  return (
    <div id="performance">
      <EasyCodeEditor
        value={code}
        onChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        theme={DefaultDark}
      />
    </div>
  );
};
