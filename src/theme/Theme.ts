import { createTheme as createMuiTheme, PaletteMode } from "@mui/material";

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
    },
  });
