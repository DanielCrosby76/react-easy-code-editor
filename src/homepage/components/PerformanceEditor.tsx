import { useContext, useState } from "react";
import EasyCodeEditor from "../../lib/exports";
import { ThemeContext } from "../ThemeProvider";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import largeFile from "../data/largeFile";
import styles from "../css/PerformanceEditor.module.css";

export default () => {
  const [code, setCode] = useState(largeFile);
  const { theme } = useContext(ThemeContext)!;
  return (
    <div className={styles.performance}>
      <div className={styles.performanceContainer}>
        <div className={styles.performanceInfo}>
          <h1>Performance First.</h1>
          <p className={styles.performanceInfoP}>
            Highlight thousands of code lines efficiently, using some of your favourite libraries
            such as{" "}
            <a className={styles.performanceLink} href="https://prismjs.com/">
              prism.js
            </a>
            ,{" "}
            <a className={styles.performanceLink} href="https://highlightjs.org/">
              highlight.js
            </a>{" "}
            or through a custom function.
          </p>
        </div>
        <div className={styles.performanceEditor}>
          <EasyCodeEditor
            value={code}
            onChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.js)}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};
