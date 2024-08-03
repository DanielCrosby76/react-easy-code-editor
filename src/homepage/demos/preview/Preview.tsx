import { useCallback, useContext, useState, useTransition } from "react";
import EasyCodeEditor, { DefaultDark, DefaultLight } from "../../../lib/exports";
import previewHTML from "./previewHTML";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "./preview.css";
import { ThemeContext } from "../../App";

export default () => {
  const [code, setCode] = useState<string>(previewHTML);
  const [html, setHtml] = useState<string>(code);
  const [_, startTransition] = useTransition();
  const theme = useContext(ThemeContext);
  const currentTheme = theme === "dark" ? DefaultDark : DefaultLight;

  const handleChange = useCallback((code: string) => {
    setCode(code);
    startTransition(() => setHtml(code));
  }, []);

  const handleHighlight = useCallback((code: string) => {
    return highlight(code, languages.html);
  }, []);

  return (
    <div id="real-time-preview">
      <div id="real-time-preview-container">
        <div id="editor-container">
          <EasyCodeEditor
            value={code}
            onChange={handleChange}
            highlight={handleHighlight}
            theme={{
              ...currentTheme,
              border: "none",
              backgroundColor: "transparent",
            }}
            showLineNumbers={false}
          />
        </div>
        <div
          id="output"
          dangerouslySetInnerHTML={{
            __html: `${html}<p id="desktop-site">Note: the demo code editors are only accessible on larger screens.</p>`,
          }}
        />
      </div>
    </div>
  );
};
