import React from "react";
import { CustomBox } from "../layout/CustomBox";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import { Box } from "@mui/material";
import { CustomCard } from "../surfaces/CustomCard";
import { NewArrivalsCard } from "../surfaces/NewArrivalsCard";

export const NewArrivals: React.FC = () => {
  return (
    <Box>
      <CustomBox
        icon={<FiberNewIcon sx={{ color: "#68C944", fontSize: "26px" }} />}
        boxTitle="NewArrivals"
      />
      <CustomCard
        width="1232px"
        height="266px"
        customSx={{ display: "flex", gap: "24px" }}
      >
        <>
          <NewArrivalsCard
            srcImage="/image/lipstick (2).png"
            title="Sunglass"
            price={150}
          />
          <NewArrivalsCard
            srcImage="/image/imagegoggles.png"
            title="Makeup"
            price={250}
          />
          <NewArrivalsCard
            srcImage="/image/bgwatch.png"
            title="Smart Watch"
            price={350}
          />
          <NewArrivalsCard
            srcImage="/image/lipstick (1).png"
            title="Lipstick"
            price={15}
          />
          <NewArrivalsCard
            srcImage="/image/lipstick (4).png"
            title="Green Plant"
            price={55}
          />
          <NewArrivalsCard
            srcImage="/image/lipstick (3).png"
            title="Bonsai Tree"
            price={535}
          />
        </>
      </CustomCard>
    </Box>
  );
};
