import { useState } from "react";
import EasyCodeEditor, { DefaultDark } from "../../../lib/exports";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import basicUsage from "./basicUsage";
import "./simple.css";

export default () => {
  const [code, setCode] = useState(basicUsage);
  return (
    <div id="simple">
      <div id="simple-container">
        <div id="simple-info">
          <h1>Simple.</h1>
          <p id="simple-info-p">
            Ready to use out of the box. Perfect for example code embeds, forms where code can be
            submitted, or simply as an input with line numbering.
          </p>
        </div>
        <div id="simple-editor">
          <EasyCodeEditor
            value={code}
            onChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.jsx)}
            theme={DefaultDark}
            dynamicHighlight={false}
            readonly
          />
        </div>
      </div>
    </div>
  );
};
