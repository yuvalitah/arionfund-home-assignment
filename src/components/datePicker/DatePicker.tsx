import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment from "moment";
import { APP_BAR_HEIGHT } from "../../theme";

interface IDatePickerProps {
  resetPictures: () => void;
}

export const DatePicker = ({ resetPictures }: IDatePickerProps) => {
  const [time, setTime] = useState(moment().format());

  const handleTimeChange = (value: string | null) => {
    if (value) {
      setTime(value);
      resetPictures();
    }
  };

  return (
    <Box position="fixed" top={APP_BAR_HEIGHT}>
      <DesktopDatePicker
        onChange={handleTimeChange}
        value={time}
        renderInput={(params) => <TextField {...params} />}
      />
    </Box>
  );
};
