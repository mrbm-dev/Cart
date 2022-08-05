import { Box } from "@mui/material";
import React from "react";
import { Carousel } from "../data-display/Carousel";
import { FlashDealsCarousel } from "../data-display/FlashDealsCarousel";
import { TopCategoriesCarouselCard } from "../surfaces/TopCategoriesCarouselCard";
import { AppBarHeader } from "../surfaces/AppBarHeader";
import { TopCategories } from "../data-display/TopCategories";
import { TopRatingFeaturedBrands } from "../data-display/TopRatingFeaturedBrands";
import { NewArrivals } from "../data-display/NewArrivals";
import { BigDiscounts } from "../data-display/BigDiscounts";
import { Cars } from "../data-display/Cars";

export const HomePage: React.FC = () => {
  return (
    <>
      <AppBarHeader />
      <Carousel />
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "1280px",
        }}
      >
        <FlashDealsCarousel />
        <TopCategories />
        <TopRatingFeaturedBrands />
        <NewArrivals />
        <BigDiscounts />
        <Cars />
      </Box>
    </>
  );
};
