import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from "react";
import { ThemeProvider as MuiThemeProvider, PaletteMode } from "@mui/material";
import { createTheme } from "../theme";

interface IThemeModeContext {
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children?: ReactNode;
}

export const ThemeModeContext = createContext<IThemeModeContext>({
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>(
    (localStorage.getItem("mode") as PaletteMode) || "light"
  );

  useEffect(() => localStorage.setItem("mode", "light"), []);
  useEffect(() => localStorage.setItem("mode", mode), [mode]);

  const themeMode = useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};
