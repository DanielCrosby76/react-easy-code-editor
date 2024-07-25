# React Easy Code Editor

An easy to use react based code editor with syntax highlighting.

React easy code editor is a small and simple library that aims to provide the user a much improved experience and increased performance over the popular libraries [react-simple-code-editor](https://github.com/react-simple-code-editor/react-simple-code-editor) and [react-textarea-code-editor](https://github.com/uiwjs/react-textarea-code-editor) while maintaining a small build size and concise code base. This library is for those who value usability and simplicity but do not need somthing fully featured like the codemirror or monaco editors.

Check out the [homepage/component demo](https://danielcrosby76.github.io/react-easy-code-editor/), [Stackblitz example project](https://stackblitz.com/edit/react-easy-code-editor) or install the package yourself from npm:

```sh
npm install react-easy-code-editor
```

### Features:

- 🔢 Line numbering
- 🌒 Themeing
- ✨ Dynamic Syntax highlighting
- 📜 Does not wrap code onto new lines

### Basic Usage

See the [examples](examples/) folder for more.

```jsx
import { useState } from "react";
import { EasyCodeEditor } from "react-easy-code-editor";

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
  const [code, setCode] = useState(`console.log("Hello, World!");`);
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

export default App;
```

### `<EasyCodeEditor />`

All props are optional.

| Prop Name        | Type                     | Default Value               | Description                                                                                                                                                                                                                    |
| ---------------- | ------------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| value            | string                   | undefined                   | The value(code) to display in the editor. The editor will manage it's own state if no value is passed in.                                                                                                                      |
| onChange         | (code: string) => void   | (code) => {}                | Listen to any value changes in the editor.                                                                                                                                                                                     |
| highlight        | (code: string) => string | (code) => htmlEscapedCode   | Function to handle syntax highlighting. Html characters should be escaped if a custom function is used.                                                                                                                        |
| placeholder      | string                   | undefined                   | Placeholder to display when no code is present in the editor.                                                                                                                                                                  |
| dynamicHighlight | boolean                  | true                        | Enable or disable highlighting the currently visible range of lines in the editor. Disabling may cause degraded performace on larger documents. If the parent element does not have a set height then this should be disabled. |
| readOnly         | boolean                  | false                       | Disables the editor allowing only viewing the current value.                                                                                                                                                                   |
| trapTab          | boolean                  | false                       | Trap the tab character in the editor for indentation with the tab key. You should avoid doing this for accessibility reasons.                                                                                                  |
| tabWidth         | number                   | 2                           | Determines the number of spaces to be inserted on tab key press. Ignored if trapTab is false.                                                                                                                                  |
| showLineNumbers  | boolean                  | true                        | Show or hide line numbers.                                                                                                                                                                                                     |
| theme            | EasyCodeEditor.Theme     | EasyCodeEditor.DefaultLight | Simple styling for the editor using a theme object.                                                                                                                                                                            |

### Theming

```js
// Import a theme of choice
import { DefaultDark } from "react-easy-code-editor";

// Apply theme to code editor
<EasyCodeEditor theme={DefaultDark} />;

// Alternativly define a custom theme with css styles
// All suported/required styles are shown here
const myTheme = {
  border: "1px solid black",
  backgroundColor: "white",
  color: "black",
  numbersBackgroundColor: "white",
  numbersColor: "black",
  numbersBorder: "1px solid black",
  caretColor: "black",
  font: "inherit",
  fontSize: 16,
};
```

#### Planned

- Tests
- Automatic indent on new lines
- Wrap selected code with: [] () <> {} "" '' ``
- JSX highlight support
- Optional line wrapping
