import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Container, Typography } from "@mui/material";
import { ButtonMenu } from "../inputs/ButtonMenu";

export const Carousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      style={{ padding: "40px 0", backgroundColor: "#fff", width: "100%" }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <Box sx={{ display: "flex", margin: "0 auto", maxWidth: "1232px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              width: "500px",
              height: "400px",
              padding: "24px 0 0 24px",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: "50px",
                color: "#2B3445",
              }}
            >
              50% Off For Your First Shopping
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              lobortis consequat eu, quam etiam at quis ut convalliss.
            </Typography>
            <ButtonMenu
              style={{
                width: "153px",
                height: "44px",
                textTransform: "none",
                backgroundColor: "#D23F57",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#E3364E" },
              }}
              variant="contained"
              showIconButton={false}
            >
              Shop Now
            </ButtonMenu>
          </Box>
          <Box
            sx={{ width: "500px", height: "400px", padding: "24px 0 0 24px" }}
          >
            <img width="100%" height="400px" src="/image/nike-black.png" />
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
};
