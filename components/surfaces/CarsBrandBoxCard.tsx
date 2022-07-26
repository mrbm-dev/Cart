import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface CarsBrandBoxCardProps {
  srcImage?: string;
  brandName: string;
}
export const CarsBrandBoxCard: React.FC<CarsBrandBoxCardProps> = (props) => {
  return (
    <Paper
      sx={{
        width: "200px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        backgroundColor: "#F6F9FC",
        boxShadow: "0px 1px 3px rgb(3 0 71 / 9%)",
        padding: "12px 16px",
        "&:hover": {
          boxShadow: "0px 4px 16px rgb(43 52 69 / 10%)",
        },
      }}
    >
      <img width="22px" height="22px" src={props.srcImage} />
      <Typography variant="h4" sx={{ fontSize: "17px", fontWeight: 600 }}>
        {props.brandName}
      </Typography>
    </Paper>
  );
};
export const CardWithoutImage: React.FC = () => {
  return (
    <Paper
      sx={{
        width: "200px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        backgroundColor: "#F6F9FC",
        boxShadow: "0px 1px 3px rgb(3 0 71 / 9%)",
        padding: "12px 16px",
        "&:hover": {
          boxShadow: "0px 4px 16px rgb(43 52 69 / 10%)",
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "17px",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
        }}
      >
        View All Brands
      </Typography>
    </Paper>
  );
};
