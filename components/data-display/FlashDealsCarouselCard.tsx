import React from "react";
import { Box, Link, Typography } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { DefaultCard } from "../surfaces/DefaultCard";

export const FlashDealsCarouselCard: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: "5px" }}>
          <BoltIcon sx={{ color: "#D23F57", fontSize: "32px" }} />
          <Typography variant="h2" sx={{ fontSize: "25px", fontWeight: 700 }}>
            Flash Deals
          </Typography>
        </Box>
        <Link
          href="#"
          underline="none"
          sx={{
            color: "#7D879C",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              color: "#7D879C",
            },
          }}
        >
          View all
          <ArrowRightOutlinedIcon sx={{ color: "#7D879C", fontSize: "22px" }} />
        </Link>
      </Box>
      <Box>
        <DefaultCard />
      </Box>
    </Box>
  );
};
