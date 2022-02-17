import React from "react";
import { Navbar, Nav, Container, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Sample Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
