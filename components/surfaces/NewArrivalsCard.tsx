import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { ImageCustomHover } from "../layout/ImageCustomHover";

interface NewArrivalsCardProps {
  srcImage: string;
  title: string;
  price: number;
}

export const NewArrivalsCard: React.FC<NewArrivalsCardProps> = (props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <ImageCustomHover src={props.srcImage} width="180px" height="180px" />

      <Typography variant="h4" sx={{ fontSize: "14px", fontWeight: 600 }}>
        {props.title}
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontSize: "14px", fontWeight: 600, color: "primary.light" }}
      >
        ${props.price}
      </Typography>
    </Box>
  );
};
