import React from "react";
import { Box, Typography } from "@mui/material";

export const HeaderTitle = () => (
  <Box
    display="flex"
    alignItems="center"
    sx={{ display: { xs: "none", sm: "flex" } }}
  >
    <Typography variant="h4" ml={3} noWrap>
      Pictures App!
    </Typography>
  </Box>
);
