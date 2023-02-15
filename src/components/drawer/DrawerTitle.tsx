import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface IDrawerTitleProps {
  closeDrawer: () => void;
}

export const DrawerTitle = ({ closeDrawer }: IDrawerTitleProps) => (
  <Box display="flex">
    <IconButton onClick={closeDrawer} sx={{ m: 1 }}>
      <ArrowBackIcon fontSize="large" />
    </IconButton>
    <Box display="flex" alignItems="center" justifyContent="center">
      <Typography variant="h5" m={2} ml={0}>
        Pictures App!
      </Typography>
    </Box>
  </Box>
);
