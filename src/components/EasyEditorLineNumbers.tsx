import { forwardRef, RefObject, memo } from "react";
import { EasyEditorLineNumbersProps } from "../index";

export default memo(
  forwardRef(({ lineCount, showLineNumbers, theme }: EasyEditorLineNumbersProps, ref) => {
    if (!showLineNumbers) return;
    return (
      <pre
        className="easy-editor-line-numbers"
        ref={ref as RefObject<HTMLPreElement>}
        style={{
          fontSize: theme.fontSize,
          borderRight: theme.numbersBorder,
          backgroundColor: theme.numbersBackgroundColor,
          color: theme.numbersColor,
        }}
      >
        {Array.from({ length: lineCount }, (_, i) => i + 1).join("\n") + "\n\n"}
      </pre>
    );
  })
);
