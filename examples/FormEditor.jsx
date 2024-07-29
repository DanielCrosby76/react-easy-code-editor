import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import EasyCodeEditor from "react-easy-code-editor";

const FormEditor = () => {
  const [{ name, code }, setFormState] = useState({ name: "", code: "" });

  const handleNameChange = (e) =>
    setFormState((formState) => {
      return { ...formState, name: e.target.value };
    });

  const handleEditorChange = (code) => {
    setFormState((formState) => {
      return { ...formState, code };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(code);
  };

  return (
    <form style={{ height: 300 }} onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter name..." 
        value={name} onChange={handleNameChange} 
      />
      <EasyCodeEditor
        placeholder="Enter code to submit..."
        value={code}
        onChange={handleEditorChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormEditor />
  </React.StrictMode>
);
