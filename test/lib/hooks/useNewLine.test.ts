import { renderHook } from "@testing-library/react";
import useNewLine from "../../../src/lib/hooks/useNewLine";

it("Should add a new line", () => {
  const code = `console.log("Hello, World!");`;
  const { result } = renderHook(() => useNewLine());
  const [newLineNumber, indentedCode, newEnd] = result.current(code, code.length);
  expect(newLineNumber).toEqual(2);
  expect(indentedCode).toEqual(`${code}\n`);
  expect(newEnd).toEqual(code.length + 1);
});

it("Should add a new line and indent it", () => {
  const code = `  console.log("Hello, World!");`;
  const { result } = renderHook(() => useNewLine());
  const [newLineNumber, indentedCode, newEnd] = result.current(code, code.length);
  expect(newLineNumber).toEqual(2);
  expect(indentedCode).toEqual(`${code}\n  `);
  expect(newEnd).toEqual(code.length + 3);
});
