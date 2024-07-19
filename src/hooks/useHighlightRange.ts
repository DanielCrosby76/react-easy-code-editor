import { useCallback } from "react";

export default (
  highlight: (code: string) => string,
  visibleLine: number,
  visibleLineCount: number
): ((lines: string[]) => string) => {
  const highlightRange = useCallback(
    (lines: string[]): string => {
      // TODO: cache(useMemo) highlighting and replace range
      if (visibleLineCount < 0) return highlight(lines.join("\n") + "\n\n");
      const start = Math.max(visibleLine - Math.floor(visibleLineCount), 0);
      const end = Math.min(visibleLine + Math.ceil(visibleLineCount), lines.length);
      const highlightSlice = lines.slice(start, end);
      const highlightedRange = highlight!(highlightSlice.join("\n"));
      const highlghtedCode = [
        ...new Array(start),
        highlightedRange,
        ...new Array(lines.length - end),
      ];

      return highlghtedCode.join("\n") + "\n\n";
    },
    [highlight, visibleLine, visibleLineCount]
  );
  return highlightRange;
};
