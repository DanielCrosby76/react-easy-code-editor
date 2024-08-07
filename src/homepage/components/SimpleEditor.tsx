import { useContext, useState } from "react";
import EasyCodeEditor from "../../lib/exports";
import { ThemeContext } from "../ThemeProvider";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import basicUsage from "../data/basicUsage";
import styles from "../css/SimpleEditor.module.css";

export default () => {
  const [code, setCode] = useState(basicUsage);
  const { theme } = useContext(ThemeContext)!;
  return (
    <div className={styles.simple}>
      <div className={styles.simpleContainer}>
        <div className={styles.simpleInfo}>
          <h1>Simple.</h1>
          <p className={styles.simpleInfoP}>
            Ready to use out of the box. Perfect for example code embeds, forms where code can be
            submitted, or simply as an input with line numbering.
          </p>
        </div>
        <div className={styles.simpleEditor}>
          <EasyCodeEditor
            value={code}
            onChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.jsx)}
            theme={theme}
            dynamicHighlight={false}
            readonly
          />
        </div>
      </div>
    </div>
  );
};
