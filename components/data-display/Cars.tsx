import { Box } from "@mui/material";
import React from "react";
import { CarsData } from "../../utils/data";
import { CarsBrandBox } from "../layout/CarsBrandBox";
import { CustomBox } from "../layout/CustomBox";
import { FlashDealsCarouselCard } from "../surfaces/FlashDealsCarouselCard";

export const Cars: React.FC = () => {
  return (
    <Box
      sx={{
        width: "1232px",
        height: "905px",
        display: "flex",
        gap: "24px",
      }}
    >
      <Box sx={{ margin: "54px 0 24px 0" }}>
        <CarsBrandBox />
      </Box>
      <Box sx={{ width: "988px", height: "inherit" }}>
        <CustomBox boxTitle="Cars" />
        <Box
          sx={{
            width: "988px",
            display: "flex",
            flexWrap: "wrap",
            rowGap: "30px",
          }}
        >
          {CarsData.map((item) => (
            <FlashDealsCarouselCard
              customSx={{
                transition: "all 250ms ease-in-out",
                width: "305px",
                "&:hover": {
                  boxShadow: "0px 8px 45px rgb(3 0 71 / 9%)",
                },
              }}
              key={item.id}
              id={item.id}
              name={item.name}
              discount={item.discount}
              off={item.off}
              price={item.price}
              srcImage={item.imageAddress}
              star={item.star}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
