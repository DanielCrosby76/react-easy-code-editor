import { renderHook } from "@testing-library/react";
import useEnclose from "../../../src/lib/hooks/useEnclose";

it("Should wrap code in brackets", () => {
  const code = `code`;
  const { result } = renderHook(() => useEnclose());
  const wrappedCode = result.current(code, "[", 0, code.length);
  expect(wrappedCode).toEqual(`[${code}]`);
});

it("Should not wrap code in brackets", () => {
  const code = `code`;
  const { result } = renderHook(() => useEnclose());
  const wrappedCode = result.current(code, "unknown", 0, code.length);
  expect(wrappedCode).toEqual(code);
});

it("Should wrap code in parens at selected indexes", () => {
  const code = `code`;
  const { result } = renderHook(() => useEnclose());
  const wrappedCode = result.current(code, "{", 1, code.length - 1);
  expect(wrappedCode).toEqual("c{od}e");
});
