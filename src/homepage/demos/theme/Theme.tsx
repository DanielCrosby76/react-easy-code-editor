import { useState } from "react";
import EasyCodeEditor, { DefaultDark } from "../../../lib/exports";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import { Theme } from "../../../lib/index";
import "./theme.css";

export default () => {
  const [customTheme, setCustomTheme] = useState<Theme>(DefaultDark);
  const [code, setCode] = useState<string>(JSON.stringify(customTheme, undefined, 4));
  const [showLineNumbers, setShowLineNumbers] = useState(false);
  return (
    <div id="theme">
      <div id="theme-container">
        <div id="theme-info">
          <h1>Customizable.</h1>
          <p id="theme-info-p">
            Style the editor component to suit your needs or personal preferences using a simple
            theme object.
          </p>
          <p>
            Line Numbers?
            <input type="checkbox" onChange={() => setShowLineNumbers(!showLineNumbers)} />
          </p>
        </div>
        <div id="theme-editor">
          <EasyCodeEditor
            value={code}
            onChange={(code) => {
              setCode(code);
              // TODO validate theme before apply
              setCustomTheme(JSON.parse(code));
            }}
            highlight={(code) => highlight(code, languages.js)}
            theme={customTheme}
            showLineNumbers={showLineNumbers}
          />
        </div>
      </div>
    </div>
  );
};
