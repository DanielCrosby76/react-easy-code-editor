import { renderHook } from "@testing-library/react";
import useHistory from "../../../src/lib/hooks/useHistory";

it("Should push, undo, and redo history", () => {
  const { result } = renderHook(() => useHistory(""));
  const inputCode = `console.log("Hello, World!");`;
  const [push, undo, redo] = result.current;
  const codeLength = inputCode.length;
  push(inputCode, codeLength, codeLength);
  const previousHistory = undo();
  expect(previousHistory).toBeDefined();
  const { code: previousCode, start: previousStart, end: previousEnd } = previousHistory!;
  expect(previousCode).toEqual("");
  expect(previousStart).toEqual(0);
  expect(previousEnd).toEqual(0);
  const nextHistory = redo();
  expect(nextHistory).toBeDefined();
  const { code, start, end } = nextHistory!;
  expect(code).toEqual(inputCode);
  expect(start).toEqual(codeLength);
  expect(end).toEqual(codeLength);
});

it("Should return undefined from undo", () => {
  const { result } = renderHook(() => useHistory(""));
  const [_, undo] = result.current;
  expect(undo()).toBeUndefined();
});

it("Should return undefined from redo", () => {
  const { result } = renderHook(() => useHistory(""));
  const [_, __, redo] = result.current;
  expect(redo()).toBeUndefined();
});
