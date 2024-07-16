import { useCallback } from "react";

export default (tabWidth: number) => {
  const insertTab = useCallback(
    (code: string, start: number, end: number): [string, number] => {
      const startSub = code.substring(0, start);
      const endSub = code.substring(end);
      return [startSub + " ".repeat(tabWidth) + endSub, tabWidth];
    },
    [tabWidth]
  );

  const insertTabBlock = useCallback(
    (code: string, start: number, end: number): [string, number] => {
      const codeBeforeStart = code.substring(0, start);
      const startLine = (codeBeforeStart.match(/\n/g) || []).length;
      const codeBeforeEnd = code.substring(0, end);
      const endLine = (codeBeforeEnd.match(/\n/g) || []).length;
      const lines = code.split("\n");
      const startSlice = lines.slice(0, startLine);
      let indentCount = 0;
      const indentSlice = lines.slice(startLine, endLine + 1).map((line) => {
        indentCount += tabWidth;
        return `${" ".repeat(tabWidth)}${line}`;
      });
      const endSlice = lines.slice(endLine + 1);
      return [[...startSlice, ...indentSlice, ...endSlice].join("\n"), indentCount];
    },
    [tabWidth]
  );

  const indent = useCallback(
    (code: string, start: number, end: number): [string, number] => {
      return start === end ? insertTab(code, start, end) : insertTabBlock(code, start, end);
    },
    [insertTab, insertTabBlock]
  );

  return indent;
};
