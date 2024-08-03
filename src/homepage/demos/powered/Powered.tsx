import { useContext } from "react";
import "./powered.css";
import { ThemeContext } from "../../App";
import { DefaultDark, DefaultLight } from "../../../lib/exports";

export default () => {
  const theme = useContext(ThemeContext);
  const currentTheme = theme === "dark" ? DefaultDark : DefaultLight;
  const backgroundColor = currentTheme.backgroundColor.replace("#", "");
  const color = theme === "dark" ? "aliceblue" : "202024"
  return (
    <div id="powered">
      <div id="powered-container">
        <img
          className="powered-container-img"
          src={`https://shields.io/badge/Node-${backgroundColor}?logo=nodedotjs&logoColor=${color}&style=flat-square`}
        />
        <img
          className="powered-container-img"
          src={`https://shields.io/badge/React-${backgroundColor}?logo=React&logoColor=${color}&style=flat-square`}
        />
        <img
          className="powered-container-img"
          src={`https://shields.io/badge/TypeScript-${backgroundColor}?logo=TypeScript&logoColor=${color}&style=flat-square`}
        />
        <img
          className="powered-container-img"
          src={`https://img.shields.io/badge/vite-${backgroundColor}?style=flat-square&logo=vite&logoColor=${color}`}
        />
        <img
          className="powered-container-img"
          src={`https://img.shields.io/badge/vitest-${backgroundColor}?style=flat-square&logo=vitest&logoColor=${color}`}
        />
      </div>
    </div>
  );
};
