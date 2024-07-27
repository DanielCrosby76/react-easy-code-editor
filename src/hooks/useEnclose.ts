import { useCallback, useMemo } from "react";

export default () => {
  const insertChar = useCallback((value: string, char: string, index: number) => {
    if (index > value.length) {
      return value + char;
    }
    return value.slice(0, index) + char + value.slice(index);
  }, []);

  const pairs = useMemo(() => {
    const entries: [string, [string, string]][] = [
      ["(", ["(", ")"]],
      [")", ["(", ")"]],
      ["[", ["[", "]"]],
      ["]", ["[", "]"]],
      ["{", ["{", "}"]],
      ["}", ["{", "}"]],
      ["<", ["<", ">"]],
      [">", ["<", ">"]],
      ["'", ["'", "'"]],
      ['"', ['"', '"']],
      ["`", ["`", "`"]],
    ];
    return new Map<string, [string, string]>(entries);
  }, []);

  return useCallback(
    (code: string, enclosingTag: string, start: number, end: number) => {
      const [startTag, endTag] = pairs.get(enclosingTag)!;
      return insertChar(insertChar(code, endTag, end), startTag, start);
    },
    []
  );
};
