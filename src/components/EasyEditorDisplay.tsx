import { forwardRef, RefObject, useCallback } from "react";
import useHighlightRange from "../hooks/useHighlightRange";
import { EasyEditorDisplayProps } from "../index";

export default forwardRef((props: EasyEditorDisplayProps, ref) => {
  const { code, highlight, visibleLine, visibleLineCount, fontSize, theme } = props;
  const highlightRange = useHighlightRange(highlight, visibleLine, visibleLineCount);
  const reducer = useCallback((longest: string, current: string) => {
    return current.length > longest.length ? current : longest;
  }, []);
  const { backgroundColor, color } = theme;

  const lines = code.split("\n");
  const highlightedCode = highlightRange(lines);
  const codeWidth = lines.reduce(reducer, "").length * fontSize;

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className="easy-editor-display"
      style={{
        backgroundColor,
      }}
      aria-hidden={true}
    >
      <pre className="easy-editor-display-pre">
        <code
          className="easy-editor-display-code"
          style={{
            width: codeWidth,
            color,
          }}
          dangerouslySetInnerHTML={{
            __html: highlightedCode,
          }}
        />
      </pre>
    </div>
  );
});
