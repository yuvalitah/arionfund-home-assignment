import React from "react";
import { IconButton } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";

interface IDrawerIconProps {
  handleDrawerToggle: () => void;
}

export const DrawerIcon = ({ handleDrawerToggle }: IDrawerIconProps) => (
  <IconButton onClick={handleDrawerToggle}>
    <PhotoIcon fontSize="large" />
  </IconButton>
);
