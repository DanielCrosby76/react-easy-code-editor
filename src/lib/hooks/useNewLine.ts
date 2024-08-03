import { useCallback } from "react";

export default () => {
  return useCallback((code: string, start: number): [number, string, number] => {
    const startLines = code.substring(0, start);
    const startLinesSplit = startLines.split("\n");
    const currentLine = startLinesSplit[startLinesSplit.length - 1];
    const spacesCount = currentLine!.match(/^ +/);
    const currentIndent = spacesCount ? spacesCount[0].length : 0;
    const indentedLine = " ".repeat(currentIndent);
    const indentedCode = `${startLines}\n${indentedLine}${code.substring(start)}`;
    const newLineNumber = startLinesSplit.length + 1;
    const newEnd = start + indentedLine.length + 1;
    return [newLineNumber, indentedCode, newEnd];
  }, []);
};
