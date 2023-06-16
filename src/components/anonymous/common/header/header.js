import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="header">
      <Navbar bg="none" expand="lg" className="py-3" variant="dark">
        <Container fluid className="p-0">
          <Navbar.Brand as={Link} to="/" className="px-lg-4 m-0">
            <h1 class="text-uppercase m-0 display-4 text-white">KOPPEE</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto p-4">
              <Nav.Link as={Link} to="/" active={pathname === "/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" active={pathname === "/about"}>
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/service"
                active={pathname === "/service"}
              >
                Service
              </Nav.Link>
              <Nav.Link as={Link} to="/menu" active={pathname === "/menu"}>
                Menu
              </Nav.Link>
              <NavDropdown
                title="Pages"
                id="basic-nav-dropdown"
                active={
                  pathname.startsWith("/reservation") ||
                  pathname.startsWith("/testimonial")
                }
              >
                <NavDropdown.Item as={Link} to="/reservation">
                  Reservation
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/testimonial">
                  Testimonial
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/contact"
                active={pathname === "/contact"}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
