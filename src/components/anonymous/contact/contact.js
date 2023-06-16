import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SectionHeader from "../common/section-header/section-header";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./contact.scss";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container fluid className="pt-5 contact">
      <Container>
        <SectionHeader title="Contact Us" desc="Feel Free To Contact" />
        <Row className="px-3 pb-2">
          <Col sm={4} className="text-center mb-3">
            <FaMapMarkerAlt className="mb-3 text-primary" />
            <h4 className="font-weight-bold">Address</h4>
            <p>123 Street, New York, USA</p>
          </Col>
          <Col sm={4} className="text-center mb-3">
            <FaPhoneAlt className="mb-3 text-primary" />
            <h4 className="font-weight-bold">Phone</h4>
            <p>+012 345 6789</p>
          </Col>
          <Col sm={4} className="text-center mb-3">
            <FaEnvelope className="mb-3 text-primary" />
            <h4 className="font-weight-bold">Email</h4>
            <p>info@example.com</p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="pb-5">
            <iframe
              style={{ width: "100%", height: "443px", border: "0" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              title="map"
            ></iframe>
          </Col>
          <Col md={6} className="pb-5">
            <div className="contact-form">
              <div id="success"></div>
              <Form
                name="sentMessage"
                id="contactForm"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    className="bg-transparent p-4"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your name
                  </Form.Control.Feedback>
                  <p className="help-block text-danger"></p>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    className="bg-transparent p-4"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your email
                  </Form.Control.Feedback>
                  <p className="help-block text-danger"></p>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    className="bg-transparent p-4"
                    id="subject"
                    placeholder="Subject"
                    required="required"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a subject
                  </Form.Control.Feedback>
                  <p className="help-block text-danger"></p>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    className="form-control bg-transparent py-3 px-4"
                    rows="5"
                    id="message"
                    placeholder="Message"
                    required="required"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your message
                  </Form.Control.Feedback>
                  <p className="help-block text-danger"></p>
                </Form.Group>
                <div>
                  <Button
                    className="font-weight-bold py-3 px-5"
                    type="submit"
                    id="sendMessageButton"
                    variant="primary"
                  >
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
