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
import useEnclose from "../hooks/useEnclose";

export default (props: EasyCodeEditorProps) => {
  const {
    value = undefined,
    onChange = () => {},
    placeholder,
    highlight = (code) => <>{code}</>,
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
  const enclose = useEnclose();
  const { border, caretColor, font, fontSize } = theme;

  const visibleLineCount = useMemo(() => {
    return dynamicHighlight && inputRef.current
      ? Math.ceil(inputRef.current.clientHeight / fontSize)
      : -1;
  }, [inputRef.current, fontSize]);

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const code = e.target.value;
    const start = e.target.selectionStart;
    const codeBeforeStart = code.substring(0, start);
    const editedLine = (codeBeforeStart.match(/\n/g) || []).length;
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
        behavior: "instant",
      });
      const topVisibleLine = Math.floor(scrollTop / fontSize);
      const halfCount = Math.ceil(visibleLineCount / 2);
      setVisibleLine(topVisibleLine + halfCount);
    },
    [fontSize, visibleLineCount]
  );

  const handleTab = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
      const value = e.currentTarget.value;
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const isShift = e.shiftKey;
      const [indentedCode, newStart, newEnd] = indent(value, start, end, isShift);
      setCode(indentedCode);
      queueMicrotask(() => {
        if (!inputRef.current) return;
        if (start !== end) inputRef.current.selectionStart = newStart;
        inputRef.current.selectionEnd = newEnd;
      });
    },
    [indent]
  );

  const handleEnclose = useCallback((e: KeyboardEvent<HTMLTextAreaElement>) => {
    const start = e.currentTarget.selectionStart;
    const end = e.currentTarget.selectionEnd;
    if (start === end) return;
    e.preventDefault();
    const value = e.currentTarget.value;
    const enclosedCode = enclose(value, e.key, start, end);
    setCode(enclosedCode);
    queueMicrotask(() => {
      if (!inputRef.current) return;
      inputRef.current.selectionStart = start + 1;
      inputRef.current.selectionEnd = end + 1;
    });
  }, []);

  const handleNewLine = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      if (start !== end) return;
      e.preventDefault();
      const value = e.currentTarget.value;
      const startLines = value.substring(0, start);
      const startLinesSplit = startLines.split("\n");
      const currentLine = startLinesSplit[startLinesSplit.length - 1];
      const spacesCount = currentLine!.match(/^ +/);
      const currentIndent = spacesCount ? spacesCount[0].length : 0;
      const indentedLine = " ".repeat(currentIndent);
      const indentedCode = `${startLines}\n${indentedLine}${value.substring(start)}`;
      const bottomVisibleLine = visibleLineCount + Math.floor(e.currentTarget.scrollTop / fontSize);
      const newLine = startLinesSplit.length + 1;
      setVisibleLine(newLine);
      setLineCount((indentedCode.match(/\n/g) || []).length + 1);
      setCode(indentedCode);
      queueMicrotask(() => {
        if (!inputRef.current) return;
        inputRef.current.selectionEnd = start + indentedLine.length + 1;
        if (newLine >= bottomVisibleLine) inputRef.current.scrollTop += fontSize;
        inputRef.current.scrollLeft = 0;
      });
    },
    [visibleLineCount, fontSize]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      const key = e.key;
      if (key === "Tab" && trapTab) handleTab(e);
      else if (/[\[\]{}()<>\"'`]/g.test(key)) handleEnclose(e);
      else if (key === "Enter") handleNewLine(e);
    },
    [handleTab, handleNewLine]
  );

  useEffect(() => {
    const resize = () => {
      if (!inputRef.current) return;
      const visibleLineCount = Math.ceil(inputRef.current.clientHeight / fontSize);
      const topVisibleLine = Math.floor(inputRef.current.scrollTop / fontSize);
      const halfCount = Math.ceil(visibleLineCount / 2);
      setVisibleLine(topVisibleLine + halfCount);
    };
    const resizeObserver = new ResizeObserver(resize);
    if (inputRef.current) resizeObserver.observe(inputRef.current);
    window.addEventListener("resize", resize);
    return () => {
      if (inputRef.current) resizeObserver.unobserve(inputRef.current);
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
