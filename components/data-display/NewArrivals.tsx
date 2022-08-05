import React from "react";
import { CustomBox } from "../layout/CustomBox";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import { Box } from "@mui/material";
import { CustomCard } from "../surfaces/CustomCard";
import { NewArrivalsCard } from "../surfaces/NewArrivalsCard";
import { NewArrivalsData } from "../../utils/data";

export const NewArrivals: React.FC = () => {
  return (
    <>
      <CustomBox
        icon={<FiberNewIcon sx={{ color: "#68C944", fontSize: "26px" }} />}
        boxTitle="New Arrivals"
      />
      <CustomCard
        width="1232px"
        height="266px"
        customSx={{ display: "flex", gap: "26px" }}
      >
        {NewArrivalsData.map((item) => (
          <NewArrivalsCard
            key={item.id}
            srcImage={item.imageAddress}
            title={item.title}
            price={item.price}
          />
        ))}
      </CustomCard>
    </>
  );
};
