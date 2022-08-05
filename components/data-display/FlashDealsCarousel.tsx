import React, { useState } from "react";
import { Box } from "@mui/material";
import { CustomBox } from "../layout/CustomBox";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FlashDealsCarouselCard } from "../surfaces/FlashDealsCarouselCard";
import { FlashDealsData } from "../../utils/data";

SwiperCore.use([Virtual, Navigation, Pagination]);
export const FlashDealsCarousel: React.FC = () => {
  return (
    <Box>
      <CustomBox
        icon={
          <BoltOutlinedIcon sx={{ color: "primary.light", fontSize: "26px" }} />
        }
        boxTitle="Flash Deals"
      />
      <Box>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          rewind={true}
          navigation
          virtual
        >
          {FlashDealsData.map((item) => (
            <SwiperSlide>
              <FlashDealsCarouselCard
                key={item.id}
                srcImage={item.imageAddress}
                name={item.name}
                star={item.star}
                price={item.price}
                discount={item.discount}
                off={item.off}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
