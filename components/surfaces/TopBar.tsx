import React from "react";
import { Box, Link, Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { ButtonMenu } from "../inputs/ButtonMenu";

export const TopBar: React.FC = () => {
  const menuItem1 = ["EN", "IR", "BN"];
  const menuItem2 = ["USD", "EUR", "BDT", "INR"];

  return (
    <Box
      id="wrapper"
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#0F3460",
      }}
    >
      <Box
        id="left"
        sx={{
          display: "flex",
          gap: 5,
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <LocalPhoneOutlinedIcon sx={{ color: "#fff", fontSize: 20 }} />
          <Typography variant="caption" gutterBottom>
            +88012 3456 7894
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <EmailOutlinedIcon sx={{ color: "#fff", fontSize: 20 }} />
          <Typography variant="caption" gutterBottom>
            support@ui-lib.com
          </Typography>
        </Box>
      </Box>

      <Box id="right" sx={{ display: "flex", gap: 2.1, alignItems: "center" }}>
        <Link href="#" underline="none">
          Theme FAQ"s
        </Link>
        <Link href="#" underline="none">
          Need Help?
        </Link>
        <ButtonMenu menuItem={menuItem1} style={{ color: "#fff" }}>
          EN
        </ButtonMenu>
        <ButtonMenu menuItem={menuItem2} style={{ color: "#fff" }}>
          USD
        </ButtonMenu>
      </Box>
    </Box>
  );
};
