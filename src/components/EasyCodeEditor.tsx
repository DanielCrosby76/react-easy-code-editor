import {
  ChangeEvent,
  UIEvent,
  useCallback,
  KeyboardEvent,
  useRef,
  useState,
  useEffect,
  useMemo,
} from "react";
import EditorDisplay from "./EditorDisplay";
import useIndent from "../hooks/useIndent";
import DefaultLight from "../themes/DefaultLight";
import EditorLineNumbers from "./EditorLineNumbers";
import { EasyCodeEditorProps } from "../index";
import useCode from "../hooks/useCode";

export default (props: EasyCodeEditorProps) => {
  const {
    value = undefined,
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
  const lineNumbersRef = useRef<HTMLPreElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);
  const indent = useIndent(tabWidth);
  const { border, caretColor, font, fontSize } = theme;

  const visibleLineCount = useMemo(() => {
    return dynamicHighlight && inputRef.current
      ? Math.ceil(inputRef.current.clientHeight / fontSize)
      : -1;
  }, [inputRef.current, fontSize]);

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const code = e.target.value;
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
      const topVisibleLine = Math.floor(scrollTop / fontSize);
      const halfCount = Math.ceil(visibleLineCount / 2);
      setVisibleLine(topVisibleLine + halfCount);
    },
    [fontSize, visibleLineCount]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      const key = e.key;
      if (key === "Tab" && trapTab) {
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
      } else if (/[\[\]{}()<>\"'`]/g.test(key)) {
        const start = e.currentTarget.selectionStart;
        const end = e.currentTarget.selectionEnd;
        if (start != end) {
          e.preventDefault();
          e.stopPropagation();
          const insertChar = (value: string, char: string, index: number) => {
            if (index > value.length) {
              return value + char;
            }
            return value.slice(0, index) + char + value.slice(index);
          };
          const openingBrackets = ["(", "[", "{", "<", "'", '"', "`"];
          const closingBrackets = [")", "]", "}", ">", "'", '"', "`"];
          const value = e.currentTarget.value;
          if (openingBrackets.includes(key)) {
            const code = insertChar(
              insertChar(value, key, start),
              closingBrackets[openingBrackets.indexOf(key)],
              end + 1
            );
            setCode(code);
          } else {
            const code = insertChar(
              insertChar(value, key, end),
              openingBrackets[closingBrackets.indexOf(key)],
              start
            );
            setCode(code);
          }
          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.selectionStart = start + 1;
              inputRef.current.selectionEnd = end + 1;
            }
          }, 0);
        }
      }
    },
    [indent]
  );

  useEffect(() => {
    const resize = () => {
      if (!inputRef.current) return;
      const visibleLineCount = Math.ceil(inputRef.current.clientHeight / fontSize);
      const topVisibleLine = Math.floor(inputRef.current.scrollTop / fontSize);
      const halfCount = Math.ceil(visibleLineCount / 2);
      setVisibleLine(topVisibleLine + halfCount);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

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
      <EditorLineNumbers
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
          onKeyDown={handleKeyDown}
          ref={inputRef}
          style={{ caretColor: caretColor }}
          value={code}
          disabled={readonly}
          aria-label="React Easy Code Editor"
          aria-readonly={readonly}
          placeholder={placeholder}
        />
        <EditorDisplay
          ref={displayRef}
          code={code}
          highlight={highlight}
          visibleLine={visibleLine}
          visibleLineCount={visibleLineCount}
          fontSize={fontSize}
          scrollWidth={inputRef.current?.scrollWidth || 0}
          theme={theme}
        />
      </div>
    </div>
  );
};
