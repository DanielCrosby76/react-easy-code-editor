import { ChangeEvent, UIEvent, useCallback, KeyboardEvent, useRef, useState } from "react";
import EasyEditorDisplay from "./EasyEditorDisplay";
import useIndent from "../hooks/useIndent";
import DefaultLight from "../themes/DefaultLight";
import EasyLineNumbers from "./EasyEditorLineNumbers";
import { EasyEditorProps } from "../index";

export default ({
  initialValue = "",
  onChange = () => {},
  highlight = (code) => code.replace(/[&<>"'`/=]/g, (char) => `<span>${char}</span>`),
  dynamicHighlight = true,
  trapTab = false,
  tabWidth = 2,
  showLineNumbers = true,
  theme = DefaultLight,
}: EasyEditorProps) => {
  const [code, setCode] = useState<string>(initialValue);
  const [visibleLine, setVisibleLine] = useState<number>(0);
  const [lineCount, setLineCount] = useState<number>(initialValue.split("\n").length);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const codeRef = useRef<string>("");
  const lineNumbersRef = useRef<HTMLPreElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);
  const indent = useIndent(tabWidth);
  const { fontSize, border, caretColor } = theme;

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const code = e.target.value;
    codeRef.current = code;
    const cursorPosition = e.target.selectionStart;
    const codeBeforeCursor = code.substring(0, cursorPosition);
    const editedLine = (codeBeforeCursor.match(/\n/g) || []).length;
    setCode(code);
    setLineCount((code.match(/\n/g) || []).length + 1);
    setVisibleLine(editedLine);
    onChange(code);
  }, []);

  const handleScroll = useCallback(
    (e: UIEvent<HTMLTextAreaElement>) => {
      const scrollTop = e.currentTarget.scrollTop;
      const scrollLeft = e.currentTarget.scrollLeft;
      displayRef.current?.scroll({
        top: scrollTop,
        left: scrollLeft,
        behavior: "instant",
      });
      lineNumbersRef.current?.scroll({
        top: scrollTop,
        left: scrollLeft,
        behavior: "instant",
      });
      setVisibleLine(Math.floor(scrollTop / fontSize));
    },
    [lineCount, fontSize]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Tab") {
        e.preventDefault();
        e.stopPropagation();
        const value = e.currentTarget.value;
        const start = e.currentTarget.selectionStart;
        const end = e.currentTarget.selectionEnd;
        const [indentedCode, indentCount] = indent(value, start, end);
        setCode(indentedCode);
        setTimeout(() => {
          if (inputRef.current) {
            if (start !== end) inputRef.current.selectionStart = start + tabWidth;
            inputRef.current.selectionEnd = end + indentCount;
          }
        }, 0);
      }
    },
    [indent]
  );

  const visibleLineCount = dynamicHighlight
    ? inputRef.current
      ? Math.ceil(inputRef.current.clientHeight / fontSize) * 2
      : lineCount
    : -1;

  return (
    <div
      className="ez-editor"
      style={{
        border,
      }}
    >
      <EasyLineNumbers
        showLineNumbers={showLineNumbers}
        lineCount={lineCount}
        theme={theme}
        ref={lineNumbersRef}
      />
      <div className="editor-container">
        <textarea
          className="ez-editor-input"
          wrap="off"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          onChange={handleChange}
          onScroll={handleScroll}
          onKeyDown={trapTab ? handleKeyDown : undefined}
          ref={inputRef}
          style={{
            fontSize,
            caretColor: caretColor,
          }}
          value={code}
        />
        <EasyEditorDisplay
          ref={displayRef}
          code={code}
          highlight={highlight}
          visibleLine={visibleLine}
          visibleLineCount={visibleLineCount}
          theme={theme}
        />
      </div>
    </div>
  );
};
