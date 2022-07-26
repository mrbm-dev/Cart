import { Box, Typography } from "@mui/material";
import React from "react";
import { ImageCustomHover } from "../layout/ImageCustomHover";

interface FeaturedBrandsCardProps {
  title: string;
  srcImage: string;
}
export const FeaturedBrandsCard: React.FC<FeaturedBrandsCardProps> = (
  props
) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        cursor: "pointer",
      }}
    >
      <ImageCustomHover width="268px" height="180px" src={props.srcImage} />
      <Typography variant="h4" sx={{ fontSize: "14px", fontWeight: 600 }}>
        {props.title}
      </Typography>
    </Box>
  );
};
