import React from "react";
import { CssBaseline, Toolbar } from "@mui/material";
import { AppBarHeaderHide } from "./AppBarHeaderHide";
import { AppBarHeaderShow } from "./AppBarHeaderShow";

export const AppBarHeader: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Toolbar />
      <AppBarHeaderHide />
      <AppBarHeaderShow title="Test" />
    </>
  );
};
