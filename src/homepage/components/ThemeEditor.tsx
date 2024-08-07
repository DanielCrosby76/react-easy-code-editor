import { useContext, useRef, useState } from "react";
import EasyCodeEditor from "../../lib/exports";
import { ThemeContext } from "../ThemeProvider";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import styles from "../styles/ThemeEditor.module.css";
import { Theme } from "../../lib";

export default () => {
  const { theme } = useContext(ThemeContext)!;
  const [customTheme, setCustomTheme] = useState<Theme>(theme);
  const [code, setCode] = useState<string>(JSON.stringify(customTheme, undefined, 4));
  const [showLineNumbers, setShowLineNumbers] = useState(false);
  const modified = useRef<boolean>(false);
  if (!modified.current && theme !== customTheme) setCustomTheme(theme);
  return (
    <div className={styles.theme}>
      <div className={styles.themeContainer}>
        <div className={styles.themeEditor}>
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
        <div className={styles.themeInfo}>
          <h1>Customizable.</h1>
          <p className={styles.themeInfoP}>
            Style the editor component to suit your needs or personal preferences using a simple
            theme object.
          </p>
          <p className={styles.toggleLineNumbers}>
            <input
              className={styles.lineNumbersCheckbox}
              type="checkbox"
              onChange={() => setShowLineNumbers(!showLineNumbers)}
            />
            Show Line Numbers?
          </p>
        </div>
      </div>
    </div>
  );
};
