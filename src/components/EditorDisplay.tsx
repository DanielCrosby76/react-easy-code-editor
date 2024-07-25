import { forwardRef, RefObject, useMemo } from "react";
import useHighlightRange from "../hooks/useHighlightRange";
import { Theme } from "../index";

type EditorDisplayProps = {
  code: string;
  highlight: (code: string) => string;
  visibleLine: number;
  visibleLineCount: number;
  fontSize: number;
  scrollWidth: number;
  theme: Theme;
};

export default forwardRef<HTMLDivElement, EditorDisplayProps>((props, ref) => {
  const { code, highlight, visibleLine, visibleLineCount, fontSize, scrollWidth, theme } = props;
  const highlightRange = useHighlightRange(highlight, visibleLine, visibleLineCount);
  const { backgroundColor, color } = theme;

  const lines = code.split("\n");
  const [linesBefore, highlightedCode] = highlightRange(lines);
  const codeHeight = useMemo(() => lines.length * fontSize + fontSize, [lines.length, fontSize]);
  const codeTop = useMemo(() => linesBefore * fontSize, [linesBefore, fontSize]);

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className="easy-editor-display"
      style={{
        backgroundColor,
      }}
      aria-hidden={true}
    >
      <pre className="easy-editor-display-pre" style={{ height: codeHeight }}>
        <code
          className="easy-editor-display-code"
          style={{
            width: scrollWidth + fontSize,
            color,
            top: codeTop,
          }}
          dangerouslySetInnerHTML={{
            __html: highlightedCode,
          }}
        />
      </pre>
    </div>
  );
});
