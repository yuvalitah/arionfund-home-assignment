import React from "react";
import { Drawer as MuiDrawer, Divider, Box } from "@mui/material";
import { DrawerTitle } from "./DrawerTitle";

interface IDrawerProps {
  isOpen: boolean;
  handleDrawerToggle: () => void;
}

export const Drawer = ({ isOpen, handleDrawerToggle }: IDrawerProps) => (
  <MuiDrawer variant="temporary" open={isOpen} onClose={handleDrawerToggle}>
    <Box display="flex" flexDirection="column" textAlign="center">
      <DrawerTitle closeDrawer={handleDrawerToggle} />
      <Divider />
    </Box>
  </MuiDrawer>
);
