import { renderHook } from "@testing-library/react";
import useIndent from "../../../src/lib/hooks/useIndent";

it("Should insert a tab at current position", () => {
  const code = `console.log("Hello, World!");`;
  const { result } = renderHook(() => useIndent(2));
  const [indentedCode, start, end] = result.current(code, 0, 0, false);
  expect(indentedCode).toEqual("  " + code);
  expect(start).toEqual(2);
  expect(end).toEqual(2);
});

it("Should insert a tab in empty string", () => {
  const code = ``;
  const { result } = renderHook(() => useIndent(2));
  const [indentedCode, start, end] = result.current(code, 0, 0, false);
  expect(indentedCode).toEqual("  ");
  expect(start).toEqual(2);
  expect(end).toEqual(2);
});

it("Should remove a tab from line start", () => {
  const code = `  console.log("Hello, World!");`;
  const { result } = renderHook(() => useIndent(2));
  const start = 0;
  const end = 0;
  const [indentedCode, newStart, newEnd] = result.current(code, start, end, true);
  expect(indentedCode).toEqual(code.trim());
  expect(newStart).toEqual(start - 2);
  expect(newEnd).toEqual(end - 2);
});

it("Should remove a space from line start", () => {
  const code = ` console.log("Hello, World!");`;
  const { result } = renderHook(() => useIndent(2));
  const start = 0;
  const end = 0;
  const [indentedCode, newStart, newEnd] = result.current(code, start, end, true);
  expect(indentedCode).toEqual(code.trim());
  expect(newStart).toEqual(start - 1);
  expect(newEnd).toEqual(end - 1);
});

it("Should not remove a tab from line start", () => {
  const code = `console.log("Hello, World!");`;
  const { result } = renderHook(() => useIndent(2));
  const start = 0;
  const end = 0;
  const [indentedCode, newStart, newEnd] = result.current(code, start, end, true);
  expect(indentedCode).toEqual(code);
  expect(newStart).toEqual(start);
  expect(newEnd).toEqual(end);
});

it("Should insert a tab at start of highlighted lines", () => {
  const code = `const printHello = () => {
const helloWorld = "Hello, World!";
console.log(helloWorld);
}`;
  const { result } = renderHook(() => useIndent(2));
  const start = 30;
  const end = 80;
  const [indentedCode, newStart, newEnd] = result.current(code, start, end, false);
  expect(indentedCode).toEqual(`const printHello = () => {
  const helloWorld = "Hello, World!";
  console.log(helloWorld);
}`);
  expect(newStart).toEqual(start + 2);
  expect(newEnd).toEqual(end + 4);
});

it("Should insert tab in empty highlighted string", () => {
  const code = ` `;
  const { result } = renderHook(() => useIndent(2));
  const start = 0;
  const end = 1;
  const [indentedCode, newStart, newEnd] = result.current(code, start, end, false);
  expect(indentedCode).toEqual(`   `);
  expect(newStart).toEqual(start + 2);
  expect(newEnd).toEqual(end + 2);
});

it("Should remove a tab at start of highlighted lines", () => {
  const code = `const printHello = () => {
  const helloWorld = "Hello, World!";
  console.log(helloWorld);
}`;
  const { result } = renderHook(() => useIndent(2));
  const start = 30;
  const end = 80;
  const [indentedCode, newStart, newEnd] = result.current(code, start, end, true);
  expect(indentedCode).toEqual(`const printHello = () => {
const helloWorld = "Hello, World!";
console.log(helloWorld);
}`);
  expect(newStart).toEqual(start - 2);
  expect(newEnd).toEqual(end - 4);
});

it("Should remove a space at start of highlighted lines", () => {
  const code = `const printHello = () => {
 const helloWorld = "Hello, World!";
 console.log(helloWorld);
}`;
  const { result } = renderHook(() => useIndent(2));
  const start = 30;
  const end = 80;
  const [indentedCode, newStart, newEnd] = result.current(code, start, end, true);
  expect(indentedCode).toEqual(`const printHello = () => {
const helloWorld = "Hello, World!";
console.log(helloWorld);
}`);
  expect(newStart).toEqual(start - 1);
  expect(newEnd).toEqual(end - 2);
});

it("Should not remove a tab at start of highlighted lines", () => {
  const code = `const printHello = () => {
const helloWorld = "Hello, World!";
console.log(helloWorld);
}`;
  const { result } = renderHook(() => useIndent(2));
  const start = 30;
  const end = 80;
  const [indentedCode, newStart, newEnd] = result.current(code, start, end, true);
  expect(indentedCode).toEqual(code);
  expect(newStart).toEqual(start);
  expect(newEnd).toEqual(end);
});
