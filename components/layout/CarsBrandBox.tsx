import { Box } from "@mui/material";
import React from "react";
import {
  CardWithoutImage,
  CarsBrandBoxCard,
} from "../surfaces/CarsBrandBoxCard";
import { CustomCard } from "../surfaces/CustomCard";

export const CarsBrandBox: React.FC = () => {
  return (
    <CustomCard width="240px" height="472px">
      <Box
        sx={{
          height: "445px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <CarsBrandBoxCard srcImage="/image/ferrari.png" brandName="Ferrari" />
          <CarsBrandBoxCard srcImage="/image/tesla.png" brandName="Tesla" />
          <CarsBrandBoxCard srcImage="/image/bmw.png" brandName="Bmw" />
          <CarsBrandBoxCard srcImage="/image/toyota.jpg" brandName="Toyota" />
          <CarsBrandBoxCard srcImage="/image/mini.png" brandName="Mini" />
          <CarsBrandBoxCard srcImage="/image/ford.png" brandName="Ford" />
        </Box>
        <Box>
          <CardWithoutImage />
        </Box>
      </Box>
    </CustomCard>
  );
};
