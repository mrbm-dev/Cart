import { Box, Button } from "@mui/material";
import type { NextPage } from "next";
import { Carousel } from "../components/data-display/Carousel";
import { FlashDealsCarouselCard } from "../components/data-display/FlashDealsCarouselCard";
import { TopCategoriesCarouselCard } from "../components/data-display/TopCategoriesCarouselCard";
import { TopRatings } from "../components/data-display/TopRatings";
import { TopRatingsCard } from "../components/feedback/TopRatingsCard";
import { CustomBox } from "../components/layout/CustomBox";
import { AppBarHeader } from "../components/surfaces/AppBarHeader";
import BoltIcon from "@mui/icons-material/Bolt";
import { FeaturedBrands } from "../components/data-display/FeaturedBrands";
import { CustomButton } from "../components/data-display/Button";
import { NewArrivals } from "../components/data-display/NewArrivals";
import { BigDiscounts } from "../components/data-display/BigDiscounts";
import { CarsBrandBox } from "../components/layout/CarsBrandBox";

const Home: NextPage = () => {
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
        {/* <FlashDealsCarouselCard /> */}
        {/* <TopCategoriesCarouselCard /> */}
        {/* <TopRatings /> */}
        {/* <CustomBox
          boxTitle="Featured Brands"
          icon={<BoltIcon sx={{ color: "#D23F57", fontSize: "32px" }} />}
        /> */}
        {/* <FeaturedBrands /> */}
        {/* <NewArrivals /> */}
        {/* <BigDiscounts /> */}
        <CarsBrandBox />
      </Box>
    </>
  );
};

export default Home;
