import { renderHook } from "@testing-library/react";
import useHighlightRange from "../../src/hooks/useHighlightRange";

// TODO adjust highlight range hook to function more predictably
it("Should highlight code range", () => {
  const lines = ["1", "2", "3", "4", "5"];
  const highlight = (code: string) => `<span>${code}</span>`;
  const visibleLine = 3;
  const visibleLineCount = 1;
  const { result } = renderHook(
    (props) => useHighlightRange(props.highlight, props.visibleLine, props.visibleLineCount),
    {
      initialProps: { highlight, visibleLine, visibleLineCount },
    }
  );
  const [linesBefore, highlightedCode] = result.current(lines);
  expect(linesBefore).toEqual(2);
  expect(highlightedCode).toEqual("<span>3\n4\n\n</span>");
});

it("Should highlight all lines", () => {
  const lines = ["1", "2", "3", "4", "5"];
  const highlight = (code: string) => `<span>${code}</span>`;
  const visibleLine = 3;
  const visibleLineCount = -1;
  const { result } = renderHook(
    (props) => useHighlightRange(props.highlight, props.visibleLine, props.visibleLineCount),
    {
      initialProps: { highlight, visibleLine, visibleLineCount },
    }
  );
  const [linesBefore, highlightedCode] = result.current(lines);
  expect(linesBefore).toEqual(0);
  expect(highlightedCode).toEqual("<span>1\n2\n3\n4\n5\n\n</span>");
});
