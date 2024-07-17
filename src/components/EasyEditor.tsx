import { ChangeEvent, UIEvent, useCallback, KeyboardEvent, useRef, useState } from "react";
import EasyEditorDisplay from "./EasyEditorDisplay";
import useIndent from "../hooks/useIndent";
import DefaultLight from "../themes/DefaultLight";
import EasyEditorLineNumbers from "./EasyEditorLineNumbers";
import { EasyEditorProps } from "../index";
import useCode from "../hooks/useCode";

export default (props: EasyEditorProps) => {
  const {
    value,
    onChange = () => {},
    placeholder,
    highlight = (code) => code.replace(/[&<>"'`/=]/g, (char) => `<span>${char}</span>`),
    dynamicHighlight = true,
    readonly = false,
    trapTab = false,
    tabWidth = 2,
    showLineNumbers = true,
    theme = DefaultLight,
  } = props;
  const [code, setCode] = useCode(value, onChange);
  const [visibleLine, setVisibleLine] = useState<number>(0);
  const [lineCount, setLineCount] = useState<number>(code.split("\n").length);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const codeRef = useRef<string>("");
  const lineNumbersRef = useRef<HTMLPreElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);
  const indent = useIndent(tabWidth);
  const { border, caretColor, font, fontSize } = theme;

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const code = e.target.value;
    codeRef.current = code;
    const cursorPosition = e.target.selectionStart;
    const codeBeforeCursor = code.substring(0, cursorPosition);
    const editedLine = (codeBeforeCursor.match(/\n/g) || []).length;
    setLineCount((code.match(/\n/g) || []).length + 1);
    setVisibleLine(editedLine);
    setCode(code);
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
      console.log(scrollTop / fontSize);
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
      className="easy-editor"
      style={{
        border,
        font,
        fontSize,
        lineHeight: 1,
      }}
    >
      <EasyEditorLineNumbers
        showLineNumbers={showLineNumbers}
        lineCount={lineCount}
        theme={theme}
        ref={lineNumbersRef}
      />
      <div className="editor-container">
        <textarea
          className="easy-editor-input"
          wrap="off"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          onChange={handleChange}
          onScroll={handleScroll}
          onKeyDown={trapTab ? handleKeyDown : undefined}
          ref={inputRef}
          style={{ caretColor: caretColor }}
          value={code}
          disabled={readonly}
          aria-label="React Easy Code Editor"
          aria-readonly={readonly}
          placeholder={placeholder}
        />
        <EasyEditorDisplay
          ref={displayRef}
          code={code}
          highlight={highlight}
          visibleLine={visibleLine}
          visibleLineCount={visibleLineCount}
          fontSize={fontSize}
          theme={theme}
        />
      </div>
    </div>
  );
};
