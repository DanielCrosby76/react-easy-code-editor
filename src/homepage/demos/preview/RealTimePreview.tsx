import { useCallback, useState, useTransition } from "react";
import EasyCodeEditor, { DefaultDark } from "../../../lib/exports";
import previewHTML from "./previewHTML";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/themes/prism-dark.css";

export default () => {
  const [code, setCode] = useState<string>(previewHTML);
  const [html, setHtml] = useState<string>(code);
  const [_, startTransition] = useTransition();

  const handleChange = useCallback((code: string) => {
    setCode(code);
    startTransition(() => setHtml(code));
  }, []);

  const handleHighlight = useCallback((code: string) => {
    return highlight(code, languages.html);
  }, []);

  return (
    <div id="homepage">
      <div id="container">
        <div id="editor-container">
          <EasyCodeEditor
            value={code}
            onChange={handleChange}
            highlight={handleHighlight}
            theme={{
              ...DefaultDark,
              border: "none",
            }}
          />
        </div>
        <div id="output" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};
