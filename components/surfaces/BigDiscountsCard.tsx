import { Box, Typography } from "@mui/material";
import React from "react";
import { ImageCustomHover } from "../layout/ImageCustomHover";
import { CustomCard } from "./CustomCard";

interface BigDiscountsCardProps {
  srcImage: string;
  title: string;
  price: number;
}
export const BigDiscountsCard: React.FC<BigDiscountsCardProps> = (props) => {
  return (
    <CustomCard width="185px" height="239px">
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <ImageCustomHover width="153px" height="153px" src={props.srcImage} />
        <Typography variant="h4" sx={{ fontSize: "14px", fontWeight: 600 }}>
          {props.title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography
            variant="h4"
            sx={{ fontSize: "14px", fontWeight: 600, color: "primary.light" }}
          >
            ${props.price}
          </Typography>
          <Typography
            sx={{
              textDecorationLine: "line-through",
              fontSize: "14px",
              fontWeight: 600,
              color: "#7D879C",
            }}
          >
            ${props.price}
          </Typography>
        </Box>
      </Box>
    </CustomCard>
  );
};
