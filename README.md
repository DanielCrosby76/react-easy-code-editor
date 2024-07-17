# React Easy Code Editor

This library aims to solve alot of the issues of libraries like `react-simple-code-editor`, `react-textarea-code-editor` and greatly improve the user experience for those on lower end hardware who do not require a fully featured editor but still want to interact with more than small documents.

```sh
npm install react-easy-code-editor
```

### Features:

- Line numbering
- Themeing
- Dynamic Syntax highlighting via custom function or third party library
- Does not wrap code lines i.e horizonaltal scrolling

### Basic Usage

```jsx
import { EasyEditor } from "react-easy-code-editor";

// A third party library is not needed for syntax highlighing
// A custom highlight function can be created instead.
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; // prismjs offers other themes

// If you prefer highlight.js
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
// import "highlight.js/styles/default.css"; // highlight.js offers other themes

// hljs.registerLanguage("javascript", javascript);

const App = () => {
  return (
    // The editor will fill the width/height of its parent
    <div style={{ height: 600 }}>
      <EasyEditor
        // Styling that modifies text sizing should be avoided within the syntax highlight function
        highlight={(code) => highlight(code, languages.js)}
        // highlight={(code) => hljs.highlight(code, { language: "javascript" }).value}
        // Starting value to display in the editor
        initialValue={`console.log("Hello, World!");`}
        // Handle updated code
        onChange={(code) => console.log(code)}
      />
    </div>
  );
};

export default App;
```

More examples comming soon.

### `<EasyEditor />`

All props in this component are optional.

| Prop Name        | Type                     | Default Value             | Description                                                                                                                                                                                                          |
| ---------------- | ------------------------ | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| initialValue     | string                   | ""                        | The starting value(code) to display in the editor.                                                                                                                                                                   |
| onChange         | (code: string) => void   | (code) => {}              | Listen to any value changes in the editor.                                                                                                                                                                           |
| highlight        | (code: string) => string | (code) => htmlEscapedCode | Function to handle syntax highlighting. Html characters should be escaped if a custom function is used.                                                                                                              |
| dynamicHighlight | boolean                  | true                      | Enable or disable highlighting the currently visible range of the editor. Disabling may cause degraded performace on larger documents. If the parent element does not have a set height then this should be disabled |
| readOnly         | boolean                  | false                     | Disables the editor allowing only viewing the initalValue.                                                                                                                                                           |
| trapTab          | boolean                  | false                     | Trap the tab character in the editor for indentation with the tab key (You should avoid doing this for accessibility reasons).                                                                                       |
| tabWidth         | number                   | 2                         | Determines the number of spaces to be inserted on tab key press. Ignored if trapTab is false.                                                                                                                        |
| showLineNumbers  | boolean                  | true                      | Show or hide line numbers.                                                                                                                                                                                           |
| theme            | EasyEditor.Theme         | EasyEditor.DefaultLight   | Simple styling for the editor using a theme object.                                                                                                                                                                  |

### Theming

```js
// Import a theme of choice
import { DefaultDark } from "react-easy-code-editor";

// Apply theme to code editor
<EasyEditor theme={DefaultDark} />;

// Alternativly define a custom theme with css styles
const myTheme = {
  border: "1px solid black",
  backgroundColor: "white",
  color: "black",
  numbersBackgroundColor: "#f5f5f5",
  numbersColor: "#6c6c6c",
  numbersBorder: "1px solid #ddd",
  caretColor: "black",
  font: "inherit",
  fontSize: 16,
};
```

#### Planned

- Tests
- Automatic indent on new lines
- Wrap selected code with: [] () <> {} "" '' ``
- IOS Support/Testing
