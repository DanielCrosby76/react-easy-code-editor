import { StrictMode, useCallback, useState, useTransition } from "react";
import ReactDOM from "react-dom/client";
import { EasyCodeEditor, DefaultDark } from "./lib";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/themes/prism-dark.css";
import "./main.css";

const demoHtml = `<style>
#react-icon {
  animation: rotating 20s linear infinite;
  height: 150px;
}
#description {
  color: gray;
}
#install {
  font-style: italic;
  background-color: #2a2a2e;
  text-align: center;
  color: rgb(188, 188, 188);
  padding: 20px;
}
.link {
  color: #61DBFB;
}
#github:hover, #npm:hover {
  background-color: #2a2a2e;
  color: rgb(188, 188, 188);
}
</style>
<img id="react-icon" src="./react.svg" alt="react"></img>
<h1 id="heading">
  React Easy Code Editor
</h1>
<h3 id="description">
  An easy to use react based code editor with syntax highlighting.
</h3>
<p>
  Check out the <a class="link" href="https://github.com/DanielCrosby76/react-easy-code-editor">github</a>,
  <a class="link" href="https://stackblitz.com/edit/react-easy-code-editor">live code demo</a>
  or install the package yourself:
</p>
<div id="install">npm i react-easy-code-editor</div>
<p>
  Edit the code to see changes on the page in real time.
</p>`;

const HomePage = () => {
  const [code, setCode] = useState<string>(demoHtml);
  const [html, setHtml] = useState<string>(demoHtml);
  const [_, startTransition] = useTransition();

  const handleChange = useCallback((code: string) => {
    setCode(code);
    startTransition(() => setHtml(code));
  }, []);

  const handleHighlight = useCallback((code: string) => {
    return highlight(code, languages.html);
  }, []);

  return (
    <div id="homepage">
      <div id="container">
        <div id="editor-container">
          <EasyCodeEditor
            value={code}
            onChange={handleChange}
            highlight={handleHighlight}
            theme={{
              ...DefaultDark,
              border: "none",
              numbersBackgroundColor: "#2a2a2e",
            }}
          />
        </div>
        <div id="output" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
