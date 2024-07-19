import { StrictMode, useState } from "react";
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
#description {
  color: gray;
}
#install {
  padding: 5px;
  font-style: italic;
}
#github {
  background-color: black;
  color: white;
  padding: 5px;
  text-decoration: none;
  margin: 5px;
}
#npm {
  background-color: red;
  color: white;
  padding: 5px;
  text-decoration: none;
}
#github:hover, #npm:hover {
  background-color: #2a2a2e;
  color: rgb(188, 188, 188);
}
</style>
<h1>
  React Easy Code Editor
</h1>
<div>
  <a id="github" href="https://github.com/DanielCrosby76/react-easy-code-editor">Github</a>
  <a id="npm" href="https://www.npmjs.com/package/react-easy-code-editor">NPM</a>
</div>
<h3 id="description">
  An easy to use react based code editor with syntax highlighting.
</h3>
<p id="install">
  npm i react-easy-code-editor
</p>
<p>
  Edit the code to see changes on the page in real time.
</p>`;

const HomePage = () => {
  const [html, setHtml] = useState<string>(demoHtml);
  return (
    <div id="homepage">
      <div id="container">
        <div id="editor-container">
          <EasyCodeEditor
            value={html}
            onChange={(code) => setHtml(code)}
            highlight={(code) => highlight(code, languages.html)}
            theme={{
              ...DefaultDark,
              border: "none",
              numbersBackgroundColor: "#2a2a2e",
            }}
            dynamicHighlight={false}
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
