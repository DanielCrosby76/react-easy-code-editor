import { createContext, ReactNode, useCallback, useState } from "react";
import { DefaultDark, DefaultLight } from "../lib/exports";
import { Theme } from "../lib";

type ThemeContextType = {
  theme: Theme;
  themeName: string;
  switchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export default ({ children }: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<string>("dark");
  const switchTheme = useCallback(() => {
    setThemeName((themeName) => (themeName === "dark" ? "light" : "dark"));
  }, []);
  const currentTheme = themeName === "dark" ? DefaultDark : DefaultLight;
  document.documentElement.style.setProperty("--background-color", currentTheme.backgroundColor);
  document.documentElement.style.setProperty(
    "--background-secondary-color",
    themeName === "dark" ? "#202024" : "#ececec"
  );
  document.documentElement.style.setProperty("--text-color", currentTheme.color);
  document.documentElement.style.setProperty(
    "--text-secondary-color",
    themeName === "dark" ? "aliceblue" : "#202024"
  );
  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        themeName,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
