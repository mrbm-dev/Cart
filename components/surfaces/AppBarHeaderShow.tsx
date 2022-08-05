import {
  AppBar,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { ScrollShow } from "./ScrollShow";

interface AppBarHeaderShowProps {
  title: string;
}
export const AppBarHeaderShow: React.FC<AppBarHeaderShowProps> = (props) => {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ScrollShow threshold={200}>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h5" noWrap>
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </ScrollShow>
    </ThemeProvider>
  );
};
