import type { NextPage } from "next";
import { Carousel } from "../components/data-display/Carousel";
import { AppBarHeader } from "../components/surfaces/AppBarHeader";

const Home: NextPage = () => {
  return (
    <>
      <AppBarHeader />
      <Carousel />
    </>
  );
};

export default Home;
