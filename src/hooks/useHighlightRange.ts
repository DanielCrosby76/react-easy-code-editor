import { useCallback } from "react";

export default (
  highlight: (code: string) => string,
  visibleLine: number,
  visibleLineCount: number
): ((lines: string[]) => [number, string]) => {
  const highlightRange = useCallback(
    (lines: string[]): [number, string] => {
      if (visibleLineCount < 0) return [0, highlight(lines.join("\n") + "\n\n")];
      const halfVisibleCount = Math.ceil(visibleLineCount);
      const start = Math.max(visibleLine - halfVisibleCount, 0);
      const end = Math.min(visibleLine + halfVisibleCount, lines.length);
      const highlightSlice = lines.slice(start, end);
      const highlightedRange = highlight!(highlightSlice.join("\n")) + "\n\n";
      return [start, highlightedRange];
    },
    [highlight, visibleLine, visibleLineCount]
  );
  return highlightRange;
};
