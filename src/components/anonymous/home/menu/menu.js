import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../../common/section-header/section-header";
import menu1 from "../../../../assets/img/menu-1.jpg";
import menu2 from "../../../../assets/img/menu-2.jpg";
import menu3 from "../../../../assets/img/menu-3.jpg";
import "./menu.scss";

const Menu = () => {
  return (
    <Container fluid className="pt-5 menu">
      <Container>
        <SectionHeader title="Menu & Pricing" desc="Competitive Pricing" />
        <Row>
          <Col lg={6}>
            <h1 className="mb-5">Hot Coffee</h1>
            <Row className="align-items-center mb-5">
              <Col xs={4} sm={3}>
                <img
                  className="w-100 rounded-circle mb-3 mb-sm-0"
                  src={menu1}
                  alt=""
                />
                <h5 className="menu-price">$5</h5>
              </Col>
              <Col xs={8} sm={9}>
                <h4>Black Coffee</h4>
                <p className="m-0">
                  Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et
                  et lorem dolor
                </p>
              </Col>
            </Row>
            <Row className="align-items-center mb-5">
              <Col xs={4} sm={3}>
                <img
                  className="w-100 rounded-circle mb-3 mb-sm-0"
                  src={menu2}
                  alt=""
                />
                <h5 className="menu-price">$7</h5>
              </Col>
              <Col xs={8} sm={9}>
                <h4>Chocolete Coffee</h4>
                <p className="m-0">
                  Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et
                  et lorem dolor
                </p>
              </Col>
            </Row>
            <Row className="align-items-center mb-5">
              <Col xs={4} sm={3}>
                <img
                  className="w-100 rounded-circle mb-3 mb-sm-0"
                  src={menu3}
                  alt=""
                />
                <h5 className="menu-price">$9</h5>
              </Col>
              <Col xs={8} sm={9}>
                <h4>Coffee With Milk</h4>
                <p className="m-0">
                  Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et
                  et lorem dolor
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <h1 className="mb-5">Cold Coffee</h1>
            <Row className="align-items-center mb-5">
              <Col xs={4} sm={3}>
                <img
                  className="w-100 rounded-circle mb-3 mb-sm-0"
                  src={menu1}
                  alt=""
                />
                <h5 className="menu-price">$5</h5>
              </Col>
              <Col xs={8} sm={9}>
                <h4>Black Coffee</h4>
                <p className="m-0">
                  Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et
                  et lorem dolor
                </p>
              </Col>
            </Row>
            <Row className="align-items-center mb-5">
              <Col xs={4} sm={3}>
                <img
                  className="w-100 rounded-circle mb-3 mb-sm-0"
                  src={menu2}
                  alt=""
                />
                <h5 className="menu-price">$7</h5>
              </Col>
              <Col xs={8} sm={9}>
                <h4>Chocolete Coffee</h4>
                <p className="m-0">
                  Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et
                  et lorem dolor
                </p>
              </Col>
            </Row>
            <Row className="align-items-center mb-5">
              <Col xs={4} sm={3}>
                <img
                  className="w-100 rounded-circle mb-3 mb-sm-0"
                  src={menu3}
                  alt=""
                />
                <h5 className="menu-price">$9</h5>
              </Col>
              <Col xs={8} sm={9}>
                <h4>Coffee With Milk</h4>
                <p className="m-0">
                  Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et
                  et lorem dolor
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Menu;
