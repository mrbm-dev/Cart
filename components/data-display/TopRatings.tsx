import React from "react";
import { TopRatingsData } from "../../utils/data";
import { TopRatingsCard } from "../feedback/TopRatingsCard";
import { CustomCard } from "../surfaces/CustomCard";

export const TopRatings: React.FC = () => {
  return (
    <CustomCard width="600px" height="235px" customSx={{ display: "flex" }}>
      {TopRatingsData.map((item) => (
        <TopRatingsCard
          name={item.name}
          numberPeople={item.numberPeople}
          price={item.price}
          star={item.star}
          srcImage={item.imageAddress}
        />
      ))}
    </CustomCard>
  );
};
