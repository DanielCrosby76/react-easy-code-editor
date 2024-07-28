import { useCallback } from "react";

export default (tabWidth: number) => {
  const insertTab = useCallback(
    (code: string, start: number, end: number, isShift: boolean): [string, number, number] => {
      if (isShift) {
        const codeBeforeStart = code.substring(0, start);
        const startLine = (codeBeforeStart.match(/\n/g) || []).length;
        const lines = code.split("\n");
        const line = lines[startLine];
        const regex = new RegExp(`^ {0,${tabWidth}}`);
        const match = line.match(regex);
        const spaceCount = match![0].length;
        if (spaceCount === 0) return [code, start, end];
        lines[startLine] = line.replace(regex, "");
        return [lines.join("\n"), start - spaceCount, end - spaceCount];
      }
      const startSub = code.substring(0, start);
      const endSub = code.substring(end);
      return [startSub + " ".repeat(tabWidth) + endSub, start + tabWidth, end + tabWidth];
    },
    [tabWidth]
  );

  const insertTabBlock = useCallback(
    (code: string, start: number, end: number, isShift: boolean): [string, number, number] => {
      const codeBeforeStart = code.substring(0, start);
      const startLine = (codeBeforeStart.match(/\n/g) || []).length;
      const codeBeforeEnd = code.substring(0, end);
      const endLine = (codeBeforeEnd.match(/\n/g) || []).length;
      const lines = code.split("\n");
      const startSlice = lines.slice(0, startLine);
      let newStart = start;
      let newEnd = end;
      const indentSpaces = " ".repeat(tabWidth);
      const indentSlice = lines.slice(startLine, endLine + 1).map((line, index) => {
        if (!isShift) {
          if (index === 0) newStart += tabWidth;
          newEnd += tabWidth;
          return `${indentSpaces}${line}`;
        }
        const regex = new RegExp(`^ {0,${tabWidth}}`);
        const match = line.match(regex);
        const spaceCount = match![0].length;
        if (spaceCount === 0) return line;
        if (index === 0) newStart -= spaceCount;
        newEnd -= spaceCount;
        return line.replace(regex, "");
      });
      const endSlice = lines.slice(endLine + 1);
      return [[...startSlice, ...indentSlice, ...endSlice].join("\n"), newStart, newEnd];
    },
    [tabWidth]
  );

  const indent = useCallback(
    (code: string, start: number, end: number, isShift: boolean): [string, number, number] => {
      return start === end
        ? insertTab(code, start, end, isShift)
        : insertTabBlock(code, start, end, isShift);
    },
    [insertTab, insertTabBlock]
  );

  return indent;
};
