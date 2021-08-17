import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarItems() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Manzur Shaheed</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/About" className="nav-link">
            About
          </Link>
          {/*<Link to="/Projects" className="nav-link">
            Projects
          </Link>
          <Link to="/Contact" className="nav-link">
            Contact
          </Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarItems;