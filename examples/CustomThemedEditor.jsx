import React from "react";
import ReactDOM from "react-dom/client";
import EasyCodeEditor from "react-easy-code-editor";

const CustomThemedEditor = () => {
  // Customise theme properties as needed
  const customHighContrastTheme = {
    border: "none",
    backgroundColor: "black",
    color: "white",
    numbersBackgroundColor: "black",
    numbersColor: "white",
    numbersBorder: "1px solid white",
    caretColor: "white",
    font: "inherit",
    fontSize: 12,
  };
  return (
    // Specify width and hight for the code editor to fill
    <div style={{ width: 300, height: 300 }}>
      <EasyCodeEditor theme={customHighContrastTheme} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomThemedEditor />
  </React.StrictMode>
);
