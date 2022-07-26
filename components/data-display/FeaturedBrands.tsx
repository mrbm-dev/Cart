import React from "react";
import { Box } from "@mui/material";
import { CustomBox } from "../layout/CustomBox";
import { CustomCard } from "../surfaces/CustomCard";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { FeaturedBrandsCard } from "../surfaces/FeaturedBrandsCard";

export const FeaturedBrands: React.FC = () => {
  return (
    <Box>
      <CustomBox
        icon={<StarOutlinedIcon sx={{ color: "#fa0", fontSize: "26px" }} />}
        boxTitle="Featured Brands"
      />

      <CustomCard
        width="600px"
        height="240px"
        customSx={{ display: "flex", gap: "24px" }}
      >
        <>
          <FeaturedBrandsCard
            srcImage="/image/london-britches.png"
            title="London Britches"
          />
          <FeaturedBrandsCard
            srcImage="/image/jim and jiko.png"
            title="Jim & Jago"
          />
        </>
      </CustomCard>
    </Box>
  );
};
