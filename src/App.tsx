import React from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Header, Gallery } from "./components";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Header />
      <Gallery />
    </LocalizationProvider>
  );
}

export default App;
