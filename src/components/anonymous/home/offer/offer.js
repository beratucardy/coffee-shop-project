import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import "./offer.scss";

const Offer = () => {
  return (
    <Container
      fluid
      className="offer my-5 py-5 text-center position-relative overlay-top overlay-bottom"
    >
      <Container className="py-5">
        <h1 className="display-3 text-primary mt-3">50% OFF</h1>
        <h1 className="text-white mb-3">Sunday Special Offer</h1>
        <h4 className="text-white font-weight-normal mb-4 pb-3">
          Only for Sunday from 1st Jan to 30th Jan 2045
        </h4>
        <Form className="form-inline justify-content-center mb-4">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Your Email"
              className="p-4"
              style={{ height: "60px" }}
            />
            <Button
              className="font-weight-bold px-4"
              type="submit"
              variant="primary"
            >
              Sign Up
            </Button>
          </InputGroup>
        </Form>
      </Container>
    </Container>
  );
};

export default Offer;
