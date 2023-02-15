import React, { useState } from "react";
import { TextField, Box, useMediaQuery, useTheme } from "@mui/material";
import { DesktopDatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { APP_BAR_HEIGHT } from "../../theme";

interface IDatePickerProps {
  resetPictures: () => void;
}

export const DatePicker = ({ resetPictures }: IDatePickerProps) => {
  const [time, setTime] = useState(moment().format());
  const theme = useTheme();

  const handleTimeChange = (value: string | null) => {
    if (value) {
      setTime(value);
      resetPictures();
    }
  };

  return (
    <Box position="fixed" top={APP_BAR_HEIGHT + 20}>
      {useMediaQuery(theme.breakpoints.up("sm")) ? (
        <DesktopDatePicker
          label="Date"
          onChange={handleTimeChange}
          value={time}
          renderInput={(params) => <TextField variant="filled" {...params} />}
          inputFormat="DD/MM/YYYY"
        />
      ) : (
        <MobileDatePicker
          label="Date"
          onChange={handleTimeChange}
          value={time}
          renderInput={(params) => <TextField variant="filled" {...params} />}
          inputFormat="DD/MM/YYYY"
        />
      )}
    </Box>
  );
};
