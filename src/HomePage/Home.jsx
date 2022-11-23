import React from "react";
import Carousel from "../Carousel/Carousel";
import { photos } from "../Carousel/Images";
import Welcome from "../welcome/Welcome";


const Home = () => {
  return (
    <>
      <Carousel pictures={photos} />
      <Welcome />
    </>
  );
};

export default Home;
