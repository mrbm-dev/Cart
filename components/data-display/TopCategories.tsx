import React from "react";
import { CustomBox } from "../layout/CustomBox";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box } from "@mui/material";
import { TopCategoriesData } from "../../utils/data";
import { TopCategoriesCarouselCard } from "../surfaces/TopCategoriesCarouselCard";

SwiperCore.use([Virtual, Navigation, Pagination]);
export const TopCategories: React.FC = () => {
  return (
    <Box>
      <CustomBox
        icon={
          <CategoryRoundedIcon
            sx={{ color: "primary.light", fontSize: "26px" }}
          />
        }
        boxTitle="Top Categories"
      />
      <Box>
        <Swiper slidesPerView={3} navigation virtual>
          {TopCategoriesData.map((item) => (
            <SwiperSlide>
              <TopCategoriesCarouselCard
                key={item.id}
                srcImage={item.imageAddress}
                category={item.category}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
