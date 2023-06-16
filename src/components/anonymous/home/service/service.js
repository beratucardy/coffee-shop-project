import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../../common/section-header/section-header";
import { FaTruck, FaCoffee, FaAward, FaTable } from "react-icons/fa";
import service1 from "../../../../assets/img/service-1.jpg";
import service2 from "../../../../assets/img/service-2.jpg";
import service3 from "../../../../assets/img/service-3.jpg";
import service4 from "../../../../assets/img/service-4.jpg";
import "./service.scss";

const Service = () => {
  return (
    <Container fluid className="pt-5 service">
      <Container>
        <SectionHeader title="OUR SERVICES" desc="Fresh & Organic Beans" />
        <Row className="row">
          <Col lg={6} className="mb-5">
            <Row className="align-items-center">
              <Col sm={5}>
                <img className="img-fluid mb-3 mb-sm-0" src={service1} alt="" />
              </Col>
              <Col sm={7}>
                <h4>
                  <FaTruck className="service-icon" />
                  Fastest Door Delivery
                </h4>
                <p className="m-0">
                  Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
                  et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
                  takima erat tempor
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="mb-5">
            <Row className="align-items-center">
              <Col sm={5}>
                <img className="img-fluid mb-3 mb-sm-0" src={service2} alt="" />
              </Col>
              <Col sm={7}>
                <h4>
                  <FaCoffee className="service-icon" />
                  Fresh Coffee Beans
                </h4>
                <p className="m-0">
                  Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
                  et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
                  takima erat tempor
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="mb-5">
            <Row className="align-items-center">
              <Col sm={5}>
                <img className="img-fluid mb-3 mb-sm-0" src={service3} alt="" />
              </Col>
              <Col sm={7}>
                <h4>
                  <FaAward className="service-icon" />
                  Best Quality Coffee
                </h4>
                <p className="m-0">
                  Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
                  et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
                  takima erat tempor
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="mb-5">
            <Row className="align-items-center">
              <Col sm={5}>
                <img className="img-fluid mb-3 mb-sm-0" src={service4} alt="" />
              </Col>
              <Col sm={7}>
                <h4>
                  <FaTable className="service-icon" />
                  Online Table Booking
                </h4>
                <p className="m-0">
                  Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
                  et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
                  takima erat tempor
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Service;
