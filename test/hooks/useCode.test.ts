import { renderHook, act } from "@testing-library/react";
import useCode from "../../src/hooks/useCode";

it("Should manage state", () => {
  const inputCode = `console.log("Hello, World!");`;
  const { result } = renderHook(() => useCode(undefined, () => {}));
  const [code, setCode] = result.current;
  expect(code).toEqual("");
  act(() => setCode(inputCode));
  expect(result.current[0]).toEqual(inputCode);
});

it("Should not manage state", () => {
  const inputCode = `console.log("Hello, World!");`;
  const { result } = renderHook(() => useCode(inputCode, () => {}));
  const [code, setCode] = result.current;
  expect(code).toEqual(inputCode);
  act(() => setCode("Fail"));
  expect(result.current[0]).toEqual(inputCode);
});

it("Should update state to match props", () => {
  let code = "";
  const onChange = (newCode: string) => {
    code = newCode;
  };
  const { result, rerender } = renderHook((props) => useCode(props.code, props.onChange), {
    initialProps: {
      code,
      onChange,
    },
  });
  const [initialCode, setCode] = result.current;
  expect(initialCode).toEqual(code);
  const newCode = `console.log("Hello, World!");`;
  act(() => setCode(newCode));
  expect(result.current[0]).toEqual("");
  rerender({
    code,
    onChange,
  });
  expect(result.current[0]).toEqual(newCode);
});
