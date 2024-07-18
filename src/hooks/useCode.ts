import { useCallback, useState } from "react";

export default (
  code: string | undefined,
  onChange: (code: string) => void
): [string, (code: string) => void] => {
  const codeIsUndefined = code === undefined;

  const [state, setState] = useState<string>(codeIsUndefined ? "" : code);

  const updateState = useCallback(
    (code: string) => {
      setState(code);
      onChange(code);
    },
    [onChange]
  );

  if (!codeIsUndefined && code !== state) setState(code);

  return [state, codeIsUndefined ? updateState : onChange];
};
