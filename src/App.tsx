import React from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Header, Gallery } from "./components";
import { ThemeProvider } from "./context";

function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Header />
        <Gallery />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
