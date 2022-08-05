import React from "react";
import { Box } from "@mui/material";
import { CustomBox } from "../layout/CustomBox";
import StarBorderPurple500RoundedIcon from "@mui/icons-material/StarBorderPurple500Rounded";
import { TopRatings } from "./TopRatings";
import { FeaturedBrands } from "./FeaturedBrands";

export const TopRatingFeaturedBrands: React.FC = () => {
  return (
    <Box
      sx={{
        width: "1280px",
        height: "322px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: "600px", height: "322px" }}>
        <CustomBox
          icon={
            <StarBorderPurple500RoundedIcon
              sx={{ color: "#fa0", fontSize: "26px" }}
            />
          }
          boxTitle="Top Ratings"
        />
        <TopRatings />
      </Box>
      <Box sx={{ width: "600px", height: "322px" }}>
        <CustomBox
          icon={
            <StarBorderPurple500RoundedIcon
              sx={{ color: "#fa0", fontSize: "26px" }}
            />
          }
          boxTitle="Featured Brands"
        />
        <FeaturedBrands />
      </Box>
    </Box>
  );
};
