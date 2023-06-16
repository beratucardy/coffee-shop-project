import React from "react";
import About from "./about/about";
import HomeCarousel from "./carousel/carousel";
import Menu from "./menu/menu";
import Offer from "./offer/offer";
import Reservation from "./reservation/reservation";
import Service from "./service/service";
import Testimonial from "./testimonial/testimonial";

const Home = () => {
  return (
    <div className="home">
      <HomeCarousel />
      <About />
      <Service />
      <Offer />
      <Menu />
      <Reservation />
      <Testimonial />
    </div>
  );
};

export default Home;
