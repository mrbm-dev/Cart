import React from "react";
import { CustomBox } from "../layout/CustomBox";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { Box } from "@mui/material";
import { BigDiscountsCard } from "../surfaces/BigDiscountsCard";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BigDiscountsData } from "../../utils/data";

SwiperCore.use([Virtual, Navigation, Pagination]);
export const BigDiscounts: React.FC = () => {
  return (
    <Box>
      <CustomBox
        icon={
          <CardGiftcardIcon sx={{ color: "primary.light", fontSize: "26px" }} />
        }
        boxTitle="Big Discounts"
      />

      <Box sx={{ display: "flex" }}>
        <Swiper slidesPerView={6} navigation virtual>
          {BigDiscountsData.map((item) => (
            <SwiperSlide>
              <BigDiscountsCard
                key={item.id}
                srcImage={item.imageAddress}
                title={item.title}
                price={item.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
