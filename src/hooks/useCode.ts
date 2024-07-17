import { useState } from "react";

export default (
  code: string | undefined,
  onChange: (code: string) => void
): [string, (code: string) => void] => {
  if (code !== undefined) return [code, onChange];
  else {
    const [code, setCode] = useState<string>("");
    return [
      code,
      (code: string) => {
        setCode(code);
        onChange(code);
      },
    ];
  }
};
