import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import "./reservation.scss";

const Reservation = () => {
  return (
    <Container fluid className="my-5">
      <Container className="container">
        <div className="reservation position-relative overlay-top overlay-bottom">
          <Row className="align-items-center">
            <Col lg={6} className="my-5 my-lg-0">
              <div className="p-5">
                <div className="mb-4">
                  <h1 className="display-3 text-primary">30% OFF</h1>
                  <h1 className="text-white">For Online Reservation</h1>
                </div>
                <p className="text-white">
                  Lorem justo clita erat lorem labore ea, justo dolor lorem
                  ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
                  sed sed diam. Ea et erat ut sed diam sea
                </p>
                <ul className="list-inline text-white m-0">
                  <li className="py-2">
                    <FaCheck className="text-primary me-3" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-2">
                    <FaCheck className="text-primary me-3" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-2">
                    <FaCheck className="text-primary me-3" />
                    Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className="text-center p-5"
                style={{ background: "#33211dcc" }}
              >
                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                <Form className="mb-5">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      className="bg-transparent border-primary p-4"
                      placeholder="Name"
                      required="required"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      className="bg-transparent border-primary p-4"
                      placeholder="Email"
                      required="required"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      className="bg-transparent border-primary p-4 datetimepicker-input"
                      placeholder="Date"
                      data-target="#date"
                      data-toggle="datetimepicker"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      className="bg-transparent border-primary p-4 datetimepicker-input"
                      placeholder="Time"
                      data-target="#time"
                      data-toggle="datetimepicker"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Select
                      className="custom-select bg-transparent border-primary px-4"
                      style={{ height: "49px" }}
                      defaultValue="person"
                    >
                      <option value="person" disabled>
                        Person
                      </option>
                      <option value="1">Person 1</option>
                      <option value="2">Person 2</option>
                      <option value="3">Person 3</option>
                      <option value="3">Person 4</option>
                    </Form.Select>
                  </Form.Group>

                  <div>
                    <Button
                      className="btn-block font-weight-bold py-3"
                      type="submit"
                      variant="primary"
                    >
                      Book Now
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
};

export default Reservation;
