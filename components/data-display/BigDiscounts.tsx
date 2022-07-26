import React from "react";
import { CustomBox } from "../layout/CustomBox";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { Box } from "@mui/material";
import { BigDiscountsCard } from "../surfaces/BigDiscountsCard";

export const BigDiscounts: React.FC = () => {
  return (
    <Box>
      <CustomBox
        icon={
          <CardGiftcardIcon sx={{ color: "primary.light", fontSize: "26px" }} />
        }
        boxTitle="Big Discounts"
      />
      {/* Carousel */}
      <Box sx={{ display: "flex" }}>
        <BigDiscountsCard
          srcImage="/image/7.png"
          title="BenX 2020"
          price={233}
        />
        <BigDiscountsCard
          srcImage="/image/9.png"
          title="Tony TV 1080p"
          price={278}
        />
        <BigDiscountsCard
          srcImage="/image/10.png"
          title="Tony PS4"
          price={177}
        />
        <BigDiscountsCard
          srcImage="/image/11.png"
          title="Setgearr 2020"
          price={124}
        />
        <BigDiscountsCard
          srcImage="/image/12.png"
          title="Tony BGB"
          price={284}
        />
        <BigDiscountsCard
          srcImage="/image/13.png"
          title="RG products"
          price={300}
        />
        <BigDiscountsCard
          srcImage="/image/14.png"
          title="Ranasonic 2019"
          price={137}
        />
        <BigDiscountsCard
          srcImage="/image/15.png"
          title="Pune HD"
          price={111}
        />
        <BigDiscountsCard
          srcImage="/image/16.png"
          title="Tony CCTV"
          price={150}
        />
      </Box>
    </Box>
  );
};
