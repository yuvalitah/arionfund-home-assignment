import { createTheme as createMuiTheme, PaletteMode } from "@mui/material";
import type {} from "@mui/x-date-pickers/themeAugmentation";

export const APP_BAR_HEIGHT = 64;

export const createTheme = (mode: PaletteMode) =>
  createMuiTheme({
    palette: {
      mode,
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          positionStatic: {
            height: APP_BAR_HEIGHT,
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "light" ? "#dfedff" : "#1A2027",
            ":hover": {
              backgroundColor: mode === "light" ? "#dfedff" : "#1A2027",
            },
            "&.Mui-focused": {
              backgroundColor: mode === "light" ? "#dfedff" : "#1A2027",
            },
          },
        },
      },
    },
  });
