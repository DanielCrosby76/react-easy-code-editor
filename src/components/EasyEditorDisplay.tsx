import { forwardRef, RefObject, useCallback } from "react";
import useHighlightRange from "../hooks/useHighlightRange";
import { EasyEditorDisplayProps } from "../index";

export default forwardRef(
  ({ code, highlight, visibleLine, visibleLineCount, theme }: EasyEditorDisplayProps, ref) => {
    const highlightRange = useHighlightRange(highlight, visibleLine, visibleLineCount);
    const reducer = useCallback((longest: string, current: string) => {
      return current.length > longest.length ? current : longest;
    }, []);
    const { fontSize, backgroundColor, color } = theme;

    const lines = code.split("\n");
    const highlightedCode = highlightRange(lines);
    const codeWidth = lines.reduce(reducer, "").length * fontSize;

    return (
      <div
        ref={ref as RefObject<HTMLDivElement>}
        className="easy-editor-display"
        style={{
          fontSize,
          backgroundColor,
        }}
        aria-hidden={true}
      >
        <pre
          className="easy-editor-display-pre"
          style={{
            width: codeWidth,
            fontSize,
            color,
          }}
        >
          <code
            dangerouslySetInnerHTML={{
              __html: highlightedCode,
            }}
          />
        </pre>
      </div>
    );
  }
);
