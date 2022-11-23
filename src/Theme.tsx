import { FC, ReactNode, useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/Theme.styled";
import { GlobalStyles } from "./styles/App.styled";

interface ThemeType {
  children: ReactNode;
}

interface ContextType {
  isDark: boolean;
  handleTheme: () => void;
}

export const ThemeContext = createContext<ContextType>({
  isDark: false,
  handleTheme: () => {},
});

const Theme: FC<ThemeType> = ({ children }) => {
  const [theme, setTheme] = useState({
    activeTheme: LightTheme,
    dark: false,
  });

  function handleTheme() {
    setTheme((prev) => ({
      activeTheme: theme.dark ? LightTheme : DarkTheme,
      dark: !prev.dark,
    }));
  }

  return (
    <ThemeProvider theme={theme.activeTheme}>
      <GlobalStyles />
      <ThemeContext.Provider value={{ isDark: theme.dark, handleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
