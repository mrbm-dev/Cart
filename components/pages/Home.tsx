import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Carousel } from "../data-display/Carousel";
import { FlashDealsCarousel } from "../data-display/FlashDealsCarousel";
import { AppBarHeader } from "../surfaces/AppBarHeader";
import { TopCategories } from "../data-display/TopCategories";
import { TopRatingFeaturedBrands } from "../data-display/TopRatingFeaturedBrands";
import { NewArrivals } from "../data-display/NewArrivals";
import { BigDiscounts } from "../data-display/BigDiscounts";
import { Cars } from "../data-display/Cars";
import { useDispatch } from "react-redux";
import { addToCart, CartItem, setCarts } from "../../store/slice/cart-slice";

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const carts: CartItem[] = JSON.parse(
      localStorage.getItem("cart") as string
    );
    if (carts !== null && carts) {
      dispatch(setCarts(carts));
    }
  }, []);

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
