import React from "react";
import { Carousel, Container } from "react-bootstrap";
import carousel1 from "../../../../assets/img/carousel-1.jpg";
import carousel2 from "../../../../assets/img/carousel-2.jpg";
import "./carousel.scss";

const HomeCarousel = () => {
  return (
    <Container fluid className="p-0 mb-5">
      <Carousel
        id="blog-carousel"
        className="carousel slide overlay-bottom"
        data-ride="carousel"
      >
        <Carousel.Item>
          <img className="w-100" src={carousel1} alt="" />
          <Carousel.Caption className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-primary font-weight-medium m-0">
              We Have Been Serving
            </h2>
            <h1 className="display-1 text-white m-0">COFFEE</h1>
            <h2 className="text-white m-0">* SINCE 1950 *</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={carousel2} alt="" />
          <Carousel.Caption className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-primary font-weight-medium m-0">
              We Have Been Serving
            </h2>
            <h1 className="display-1 text-white m-0">COFFEE</h1>
            <h2 className="text-white m-0">* SINCE 1950 *</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HomeCarousel;
