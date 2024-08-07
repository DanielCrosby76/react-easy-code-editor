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
import useCode from "../hooks/useCode";
import useEnclose from "../hooks/useEnclose";
import useNewLine from "../hooks/useNewLine";
import useHistory from "../hooks/useHistory";
import styles from "../styles/EasyCodeEditor.module.css";
import { EasyCodeEditorProps } from "../index";

export default (props: EasyCodeEditorProps) => {
  const {
    value = undefined,
    onChange = () => {},
    placeholder,
    highlight = (code) => <>{code}</>,
    dynamicHighlight = true,
    readonly = false,
    wrapParens = true,
    autoIndent = true,
    trapTab = false,
    tabWidth = 2,
    showLineNumbers = true,
    theme = DefaultLight,
  } = props;
  const { border, caretColor, font, fontSize, color, backgroundColor } = theme;

  const [code, setCode] = useCode(value, onChange);
  const [push, undo, redo] = useHistory(code);
  const [visibleLine, setVisibleLine] = useState<number>(0);
  const [lineCount, setLineCount] = useState<number>(code.split("\n").length);
  const indent = useIndent(tabWidth);
  const enclose = useEnclose();
  const newLine = useNewLine();

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLPreElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);

  const visibleLineCount = useMemo(() => {
    return dynamicHighlight && inputRef.current
      ? Math.ceil(inputRef.current.clientHeight / fontSize)
      : -1;
  }, [inputRef.current, fontSize]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const code = e.target.value;
      const start = e.target.selectionStart;
      const codeBeforeStart = code.substring(0, start);
      const editedLine = (codeBeforeStart.match(/\n/g) || []).length;
      setLineCount((code.match(/\n/g) || []).length + 1);
      setVisibleLine(editedLine);
      setCode(code);
      push(code, start, e.target.selectionEnd);
    },
    [setCode]
  );

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

  const setSelection = useCallback((start?: number, end?: number) => {
    queueMicrotask(() => {
      if (!inputRef.current) return;
      if (start) inputRef.current.selectionStart = start;
      if (end) inputRef.current.selectionEnd = end;
    });
  }, []);

  const handleTab = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
      const value = e.currentTarget.value;
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const isShift = e.shiftKey;
      const [indentedCode, newStart, newEnd] = indent(value, start, end, isShift);
      setCode(indentedCode);
      push(indentedCode, newStart, newEnd);
      setSelection(start !== end ? newStart : undefined, newEnd);
    },
    [indent, setCode]
  );

  const handleEnclose = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      if (start === end) return;
      e.preventDefault();
      const value = e.currentTarget.value;
      const enclosedCode = enclose(value, e.key, start, end);
      const newStart = start + 1;
      const newEnd = end + 1;
      setCode(enclosedCode);
      push(enclosedCode, newStart, newEnd);
      setSelection(newStart, newEnd);
    },
    [enclose, setCode]
  );

  const handleNewLine = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      if (start !== end) return;
      e.preventDefault();
      const value = e.currentTarget.value;
      const [newLineNumber, indentedCode, newEnd] = newLine(value, start);
      const bottomVisibleLine = visibleLineCount + Math.floor(e.currentTarget.scrollTop / fontSize);
      setVisibleLine(newLineNumber);
      setLineCount((indentedCode.match(/\n/g) || []).length + 1);
      setCode(indentedCode);
      push(indentedCode, newEnd, newEnd);
      setSelection(undefined, newEnd);
      queueMicrotask(() => {
        if (!inputRef.current) return;
        if (newLineNumber >= bottomVisibleLine) inputRef.current.scrollTop += fontSize;
        inputRef.current.scrollLeft = 0;
      });
    },
    [visibleLineCount, fontSize, setCode]
  );

  const handleUndo = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
      const history = undo();
      if (!history) return;
      const { code, start, end } = history;
      setCode(code);
      setLineCount((code.match(/\n/g) || []).length + 1);
      setSelection(start, end);
    },
    [setCode]
  );

  const handleRedo = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
      const history = redo();
      if (!history) return;
      const { code, start, end } = history;
      setCode(code);
      setLineCount((code.match(/\n/g) || []).length + 1);
      setSelection(start, end);
    },
    [setCode]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      const key = e.key;
      if (trapTab && key === "Tab") handleTab(e);
      else if (wrapParens && /[\[\]{}()<>\"'`]/g.test(key)) handleEnclose(e);
      else if (autoIndent && key === "Enter") handleNewLine(e);
      else if (e.ctrlKey && key === "z") handleUndo(e);
      else if (e.ctrlKey && key === "y") handleRedo(e);
    },
    [handleTab, handleEnclose, handleNewLine, handleUndo, handleRedo]
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
      className={styles.easyCodeEditor}
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
      <div className={styles.easyCodeEditorContainer}>
        <textarea
          className={styles.easyCodeEditorInput}
          wrap="off"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          onChange={handleChange}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          style={{ caretColor: caretColor, scrollbarColor: `${color} ${backgroundColor}` }}
          value={code}
          readOnly={readonly}
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
          scrollWidth={inputRef.current?.scrollWidth || 0}
          theme={theme}
        />
      </div>
    </div>
  );
};
