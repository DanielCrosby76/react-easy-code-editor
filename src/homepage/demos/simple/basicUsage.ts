export default `/**
 * Welcome to the <ReactEasyCodeEditor /> basic usage demo!
 *
 * See the github's readme for more info.
 */
import { useState } from "react";
import EasyCodeEditor from "react-easy-code-editor";

// A third party library is not needed for syntax highlighing
// A custom highlight function can be created instead
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; // prismjs offers other themes

// If you prefer highlight.js
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
// A style that does not affect font sizing needs to be used
// import "highlight.js/styles/qtcreator-light.css";

// hljs.registerLanguage("javascript", javascript);

const App = () => {
  // Optionally controll the editors state
  const [code, setCode] = useState('console.log("Hello, World!");');
  return (
    // The editor will fill the width/height of its parent
    <div style={{ height: 500 }}>
      <EasyCodeEditor
        // The editor will manage its own state when no value is passed in
        value={code}
        // Handle updated code
        onChange={(code) => setCode(code)}
        // Handle syntax highlighting
        highlight={(code) => highlight(code, languages.js)}
        // For highlight.js
        // highlight={(code) => hljs.highlight(code, { language: "javascript" }).value}
      />
    </div>
  );
};

export default App;`;
