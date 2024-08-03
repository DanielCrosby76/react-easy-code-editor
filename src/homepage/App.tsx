import { createContext, useState } from "react";
import RealTime from "./demos/preview/Preview";
import Performance from "./demos/performance/Performance";
import Theme from "./demos/theme/Theme";
import Simple from "./demos/simple/Simple";
import Powered from "./demos/powered/Powered";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-dark.css";
// import "prismjs/themes/prism.css";
import "./main.css";
import { DefaultDark, DefaultLight } from "../lib/exports";

export const ThemeContext = createContext("dark");

export default () => {
  const [theme, setTheme] = useState("dark");
  const currentTheme = theme === "dark" ? DefaultDark : DefaultLight;
  document.documentElement.style.setProperty("--background-color", currentTheme.backgroundColor);
  document.documentElement.style.setProperty(
    "--background-secondary-color",
    theme === "dark" ? "#202024" : "#ececec"
  );
  document.documentElement.style.setProperty("--text-color", currentTheme.color);
  document.documentElement.style.setProperty(
    "--text-secondary-color",
    theme === "dark" ? "aliceblue" : "#202024"
  );
  return (
    <>
      <div id="header">
        <div id="header-container">
          <span id="header-text-container">
            <img id="header-icon" src="./react.svg" alt="react"></img>
            <span id="header-text">React Easy Code Editor</span>
          </span>
          <div id="theme-select" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "🌒" : "☀️"}
          </div>
        </div>
      </div>
      <ThemeContext.Provider value={theme}>
        <RealTime />
        <Performance />
        <Theme />
        <Simple />
        <Powered />
      </ThemeContext.Provider>
    </>
  );
};
