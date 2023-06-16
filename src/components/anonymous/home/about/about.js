import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../../common/section-header/section-header";
import about from "../../../../assets/img/about.png";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="py-5 about">
      <Container>
        <SectionHeader title="About Us" desc="Serving Since 1950" />
        <Row>
          <Col lg={4} className="py-0 py-lg-5">
            <h1 className="mb-3">Our Story</h1>
            <h5 className="mb-3">
              Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet
              sed vero dolor sea
            </h5>
            <p>
              Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
              nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet
              no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit
              ut. Labor diam sed ipsum et eirmod
            </p>
            <Button
              href=""
              className="font-weight-bold py-2 px-4 mt-2"
              variant="secondary"
            >
              Learn More
            </Button>
          </Col>
          <Col
            lg={4}
            className="col-lg-4 py-5 py-lg-0"
            style={{ minHeight: "500px" }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100"
                src={about}
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
          </Col>
          <Col lg={4} className="py-0 py-lg-5">
            <h1 className="mb-3">Our Vision</h1>
            <p>
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <h5 className="mb-3">
              <FaCheck className="text-primary me-3" />
              Lorem ipsum dolor sit amet
            </h5>
            <h5 className="mb-3">
              <FaCheck className="text-primary me-3" />
              Lorem ipsum dolor sit amet
            </h5>
            <h5 className="mb-3">
              <FaCheck className="text-primary me-3" />
              Lorem ipsum dolor sit amet
            </h5>
            <Button
              href=""
              className="font-weight-bold py-2 px-4 mt-2"
              variant="primary"
            >
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
