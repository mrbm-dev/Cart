import React, { useState } from "react";
import { Box, Divider, Drawer, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { ShoppingCard } from "../surfaces/ShoppingCard";

export const CustomDrawer: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
      >
        <Box
          sx={{
            height: "74px",
            width: "340px",
            display: "flex",
            alignItems: "center",
            padding: "12px",
            gap: "10px",
          }}
        >
          <ShoppingBagOutlinedIcon sx={{ fontSize: "28px", margin: 0 }} />
          <Typography
            variant="caption"
            sx={{ color: "#000", fontSize: "18px" }}
          >
            3 Item
          </Typography>
        </Box>
        <Divider />
        <ShoppingCard />
      </Drawer>
    </>
  );
};
