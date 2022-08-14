import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    common: {},
    primary: {
      main: "#E3364E",
      light: "#D23F57",
    },
    secondary: {
      main: "#0F3460",
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.54);",
          width: 42,
          height: 42,
          backgroundColor: "#F3F5F9",
          padding: 2,
          cursor: "pointer",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderColor: "rgb(118,118,188)",
          border: "none",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#fff",
          fontSize: 12,
          "&:hover": { color: "#d16446" },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: "5px",
          paddingRight: "5px",
        },
      },
    },
  },
});

export default theme;
