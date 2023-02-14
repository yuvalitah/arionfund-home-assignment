import React, { useState } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import { HeaderTitle } from "./HeaderTitle";
import { Drawer, DrawerIcon } from "../drawer";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () =>
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <PhotoIcon fontSize="large" />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <DrawerIcon handleDrawerToggle={handleDrawerToggle} />
          </Box>
          <HeaderTitle />
        </Box>
        <Drawer isOpen={isDrawerOpen} handleDrawerToggle={handleDrawerToggle} />
      </Toolbar>
    </AppBar>
  );
};
