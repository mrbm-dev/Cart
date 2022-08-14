import React from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { AppBarHeaderHide } from "./AppBarHeaderHide";
import { AppBarHeaderShow } from "./AppBarHeaderShow";

export const AppBarHeader: React.FC = () => {
  return (
    <Box>
      <CssBaseline />
      <Toolbar />
      <AppBarHeaderHide />
      <AppBarHeaderShow title="Test" />
    </Box>
  );
};
