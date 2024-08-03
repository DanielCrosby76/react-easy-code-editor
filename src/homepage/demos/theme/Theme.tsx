import { useContext, useRef, useState } from "react";
import EasyCodeEditor, { DefaultDark, DefaultLight } from "../../../lib/exports";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import { Theme } from "../../../lib/index";
import "./theme.css";
import { ThemeContext } from "../../App";

export default () => {
  const theme = useContext(ThemeContext);
  const [customTheme, setCustomTheme] = useState<Theme>(
    theme === "dark" ? DefaultDark : DefaultLight
  );
  const [code, setCode] = useState<string>(JSON.stringify(customTheme, undefined, 4));
  const [showLineNumbers, setShowLineNumbers] = useState(false);
  const currentTheme = theme === "dark" ? DefaultDark : DefaultLight;
  const modified = useRef<boolean>(false);
  if (!modified.current && currentTheme !== customTheme) setCustomTheme(currentTheme);
  return (
    <div id="theme">
      <div id="theme-container">
        <div id="theme-info">
          <h1>Customizable.</h1>
          <p id="theme-info-p">
            Style the editor component to suit your needs or personal preferences using a simple
            theme object.
          </p>
          <p id="toggle-line-numbers">
            Line Numbers?
            <input type="checkbox" onChange={() => setShowLineNumbers(!showLineNumbers)} />
          </p>
        </div>
        <div id="theme-editor">
          <EasyCodeEditor
            value={code}
            onChange={(code) => {
              modified.current = true;
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
