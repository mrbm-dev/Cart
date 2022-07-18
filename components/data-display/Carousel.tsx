import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Typography } from "@mui/material";

export const Carousel: React.FC = () => {
  return (
    <>
      <Swiper
        style={{ margin: "100px" }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Typography variant="h1">sdfsdfdafdfdf</Typography>
          <Image width={"100%"} height={"100%"} src="/image/car.png" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
};
