import { useCallback, useRef, useState } from "react";

type History = {
  value: string;
  // start: number;
  // end: number;
};

export default (
  code: string | undefined,
  onChange: (code: string) => void
): [string, (code: string) => void, () => void] => {
  const historyRef = useRef<History[]>([]);
  // const historyPointerRef = useRef<number>(0);
  const isUndoRedo = useRef<boolean>(false);

  const codeIsUndefined = code === undefined;

  const [codeState, setCodeState] = useState<string>(codeIsUndefined ? "" : code);

  const updateState = useCallback(
    (code: string) => {
      setCodeState((state) => {
        if (!isUndoRedo.current) historyRef.current.push({ value: state });
        isUndoRedo.current = false;
        return code;
      });
    },
    [isUndoRedo.current]
  );

  const setState = useCallback(
    (code: string) => {
      if (codeIsUndefined) updateState(code);
      onChange(code);
    },
    [onChange]
  );

  if (!codeIsUndefined && code !== codeState) updateState(code);

  const undo = useCallback(() => {
    const previous = historyRef.current.pop();
    if (!previous) return;
    isUndoRedo.current = true;
    const { value } = previous;
    setState(value);
  }, [setState]);

  // const redo = useCallback(() => {
  //   isUndoRedo.current = true;
  // }, [updateState]);

  return [codeState, setState, undo];
};
