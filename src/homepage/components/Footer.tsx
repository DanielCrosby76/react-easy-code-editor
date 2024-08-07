import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import styles from "../css/Footer.module.css";

export default () => {
  const { theme, themeName } = useContext(ThemeContext)!;
  const backgroundColor = theme.backgroundColor.replace("#", "");
  const color = themeName === "dark" ? "aliceblue" : "202024";
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <img
          className={styles.footerContainerImg}
          src={`https://shields.io/badge/Node-${backgroundColor}?logo=nodedotjs&logoColor=${color}&style=flat-square`}
        />
        <img
          className={styles.footerContainerImg}
          src={`https://shields.io/badge/React-${backgroundColor}?logo=React&logoColor=${color}&style=flat-square`}
        />
        <img
          className={styles.footerContainerImg}
          src={`https://shields.io/badge/TypeScript-${backgroundColor}?logo=TypeScript&logoColor=${color}&style=flat-square`}
        />
        <img
          className={styles.footerContainerImg}
          src={`https://img.shields.io/badge/vite-${backgroundColor}?style=flat-square&logo=vite&logoColor=${color}`}
        />
        <img
          className={styles.footerContainerImg}
          src={`https://img.shields.io/badge/vitest-${backgroundColor}?style=flat-square&logo=vitest&logoColor=${color}`}
        />
      </div>
    </div>
  );
};
