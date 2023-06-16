import React from "react";
import { Container } from "react-bootstrap";
import SectionHeader from "../../common/section-header/section-header";
import testimonial1 from "../../../../assets/img/testimonial-1.jpg";
import testimonial2 from "../../../../assets/img/testimonial-2.jpg";
import testimonial3 from "../../../../assets/img/testimonial-3.jpg";
import testimonial4 from "../../../../assets/img/testimonial-4.jpg";
import "./testimonial.scss";
import ReactOwlCarousel from "react-owl-carousel";

const Testimonial = () => {
  const options = {
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  return (
    <Container fluid className="py-5 testimonial">
      <Container>
        <SectionHeader title="Testimonial" desc="Our Clients Say" />
        <ReactOwlCarousel
          className="owl-carousel testimonial-carousel"
          {...options}
        >
          <div className="item">
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid" src={testimonial1} alt="" />
              <div className="ms-3">
                <h4>Client Name</h4>
                <i>Profession</i>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor tempor ipsum sanct clita
            </p>
          </div>
          <div className="item">
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid" src={testimonial2} alt="" />
              <div className="ms-3">
                <h4>Client Name</h4>
                <i>Profession</i>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor tempor ipsum sanct clita
            </p>
          </div>
          <div className="item">
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid" src={testimonial3} alt="" />
              <div className="ms-3">
                <h4>Client Name</h4>
                <i>Profession</i>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor tempor ipsum sanct clita
            </p>
          </div>
          <div className="item">
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid" src={testimonial4} alt="" />
              <div className="ms-3">
                <h4>Client Name</h4>
                <i>Profession</i>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor tempor ipsum sanct clita
            </p>
          </div>
        </ReactOwlCarousel>
      </Container>
    </Container>
  );
};

export default Testimonial;
