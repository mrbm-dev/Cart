import React from "react";
import { Box, Link, Typography } from "@mui/material";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

interface CustomBoxProps {
  width?: string;
  height?: string;
  boxTitle: string;
  icon: JSX.Element;
}
export const CustomBox: React.FC<CustomBoxProps> = (props) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between" }}
      width={props.width}
      height={props.height}
    >
      <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
        {props.icon}
        <Typography
          variant="h2"
          sx={{ fontSize: "25px", fontWeight: 700, color: "#2B3445" }}
        >
          {props.boxTitle}
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
  );
};
