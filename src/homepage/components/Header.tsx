import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import styles from "../styles/Header.module.css";

export default () => {
  const { themeName, switchTheme } = useContext(ThemeContext)!;
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <span className={styles.headerTextContainer}>
          <img className={styles.headerIcon} src="./react.svg" alt="react"></img>
          <span className={styles.headerText}>React Easy Code Editor</span>
        </span>
        <div className={styles.themeSelect} onClick={switchTheme}>
          {themeName === "dark" ? "🌒" : "☀️"}
        </div>
      </div>
    </div>
  );
};
