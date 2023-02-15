import React from "react";
import { Drawer as MuiDrawer, Divider, Box } from "@mui/material";
import { DrawerTitle } from "./DrawerTitle";
import { ThemeToggle } from "../themeToggle";

interface IDrawerProps {
  isOpen: boolean;
  handleDrawerToggle: () => void;
}

export const Drawer = ({ isOpen, handleDrawerToggle }: IDrawerProps) => (
  <MuiDrawer
    variant="temporary"
    open={isOpen}
    onClose={handleDrawerToggle}
    sx={{
      display: { xs: "block", sm: "none" },
    }}
  >
    <Box display="flex" flexDirection="column" textAlign="center" flex={1}>
      <DrawerTitle closeDrawer={handleDrawerToggle} />
      <Divider />
    </Box>
    <ThemeToggle />
  </MuiDrawer>
);
