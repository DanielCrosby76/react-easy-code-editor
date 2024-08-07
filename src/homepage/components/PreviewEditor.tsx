import { useCallback, useContext, useState, useTransition } from "react";
import EasyCodeEditor from "../../lib/exports";
import { ThemeContext } from "../ThemeProvider";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import previewHTML from "../data/previewHTML";
import styles from "../styles/PreviewEditor.module.css";

export default () => {
  const [code, setCode] = useState<string>(previewHTML);
  const [html, setHtml] = useState<string>(code);
  const [_, startTransition] = useTransition();
  const { theme } = useContext(ThemeContext)!;

  const handleChange = useCallback((code: string) => {
    setCode(code);
    startTransition(() => setHtml(code));
  }, []);

  const handleHighlight = useCallback((code: string) => {
    return highlight(code, languages.html);
  }, []);

  return (
    <div className={styles.realTimePreview}>
      <div className={styles.realTimePreviewContainer}>
        <div className={styles.editorContainer}>
          <EasyCodeEditor
            value={code}
            onChange={handleChange}
            highlight={handleHighlight}
            theme={{
              ...theme,
              border: "none",
              backgroundColor: "transparent",
            }}
            showLineNumbers={false}
          />
        </div>
        <div
          className={styles.output}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </div>
  );
};
