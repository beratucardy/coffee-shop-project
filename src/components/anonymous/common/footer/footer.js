import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <Container
      fluid
      className="footer text-white mt-5 pt-5 px-0 position-relative overlay-top"
    >
      <Row className="mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
        <Col md={6} lg={3} className="mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Get In Touch
          </h4>
          <p>
            <FaMapMarkerAlt className="me-2" />
            123 Street, New York, USA
          </p>
          <p>
            <FaPhoneAlt className="me-2" />
            +012 345 67890
          </p>
          <p className="m-0">
            <FaEnvelope className="me-2" />
            info@example.com
          </p>
        </Col>
        <Col md={6} lg={3} className="mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Follow Us
          </h4>
          <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
          <div className="d-flex justify-content-start">
            <a
              className="btn btn-lg btn-outline-light btn-lg-square me-2"
              href="https://twitter.com/home"
            >
              <FaTwitter />
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square me-2"
              href="https://www.facebook.com"
            >
              <FaFacebookF />
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square me-2"
              href="https://tr.linkedin.com/"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square"
              href="https://www.instagram.com/"
            >
              <FaInstagram />
            </a>
          </div>
        </Col>
        <Col md={6} lg={3} className="mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Open Hours
          </h4>
          <div>
            <h6 className="text-white text-uppercase">Monday - Friday</h6>
            <p>8.00 AM - 8.00 PM</p>
            <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
            <p>2.00 PM - 8.00 PM</p>
          </div>
        </Col>
        <Col md={6} lg={3} className="mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Newsletter
          </h4>
          <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
          <div className="w-100">
            <InputGroup className="input-group">
              <Form.Control
                type="text"
                placeholder="Your Email"
                className="border-light"
              />
              <Button
                className="font-weight-bold px-3"
                type="submit"
                variant="primary"
              >
                Sign Up
              </Button>
            </InputGroup>
          </div>
        </Col>
      </Row>
      <Container
        fluid
        className="text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5 divborder"
      >
        <p className="mb-2 text-white">
          Copyright &copy;{" "}
          <a
            className="font-weight-bold"
            href="https://www.linkedin.com/in/beratucar/"
          >
            Domain
          </a>
          . All Rights Reserved.
        </p>
        <p className="m-0 text-white">
          Designed by{" "}
          <a className="font-weight-bold" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </p>
      </Container>
    </Container>
  );
};

export default Footer;
