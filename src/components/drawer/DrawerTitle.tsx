import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
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
      <PhotoIcon fontSize="large" />
      <Typography variant="h5" m={2}>
        Pictures App!
      </Typography>
    </Box>
  </Box>
);
