import { forwardRef, RefObject, memo } from "react";
import styles from "../styles/EditorLineNumbers.module.css";
import { Theme } from "../index";

type EditorLineNumbersProps = {
  lineCount: number;
  showLineNumbers: boolean;
  theme: Theme;
};

export default memo(
  forwardRef((props: EditorLineNumbersProps, ref) => {
    const { lineCount, showLineNumbers, theme } = props;
    if (!showLineNumbers) return;
    return (
      <pre
        className={styles.editorLineNumbers}
        ref={ref as RefObject<HTMLPreElement>}
        style={{
          fontSize: theme.fontSize,
          borderRight: theme.numbersBorder,
          backgroundColor: theme.numbersBackgroundColor,
          color: theme.numbersColor,
        }}
        aria-hidden={true}
      >
        {Array.from({ length: lineCount }, (_, i) => i + 1).join("\n") + "\n\n"}
      </pre>
    );
  })
);
