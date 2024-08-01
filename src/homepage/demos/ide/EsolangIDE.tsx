import { useState } from "react";
import EasyCodeEditor, { DefaultDark } from "../../../lib/exports";
import bfCode from "./code";
import interpreter from "./interpreter";
import "./ide.css";

// TODO finish ide demo
export default () => {
  const [code, setCode] = useState<string>(bfCode);
  const [output, setOutput] = useState<string>("");

  const customBFHighlight = (code: string) => {
    const highlightedCode = code
      // @ts-ignore
      .replaceAll(/[<>]/g, (match: string) => `<span style="color: #90F">${match}</span>`)
      .replaceAll("+", `<span style="color: #6F0">+</span>`)
      .replaceAll("-", `<span style="color: red">-</span>`)
      .replaceAll("[", `<span style="color: aqua">[</span>`)
      .replaceAll("]", `<span style="color: aqua">]</span>`)
      .replaceAll(",", `<span style="color: white">,</span>`)
      .replaceAll(".", `<span style="color: white">.</span>`);
    return `<span style="color: gray">${highlightedCode}</span>`;
  };

  return (
    <div id="ide">
      <div id="ide-buttons">
        <button className="ide-button" onClick={() => setOutput(interpreter(code))}>
          Run
        </button>
        {/* <button className="ide-button">Format</button>
        <button className="ide-button">Clear</button> */}
      </div>
      <div id="ide-input">
        <EasyCodeEditor
          value={code}
          onChange={(code) => setCode(code)}
          highlight={(code) => customBFHighlight(code)}
          // theme={DefaultDark}
          theme={{ ...DefaultDark, border: "none" }}
        />
      </div>
      <pre id="ide-output">{output}</pre>
    </div>
  );
};
