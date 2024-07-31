import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../public/logo.png"
import ButtonComponent from "./Button";
import { Image } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="white">
      <Container>
        <Navbar.Brand href="#">
          <Image src={logo} alt="Logo" width={156} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3 gap-lg-3 text-center md:gap-1 mx-auto">
            <Nav.Link href="#services" className="text-dark">
              Services
            </Nav.Link>
            <Nav.Link href="#owners" className="text-dark">
              Owners
            </Nav.Link>
            <Nav.Link href="#residents" className="text-dark">
              Residents
            </Nav.Link>
            <Nav.Link href="#properties" className="text-dark">
              Properties
            </Nav.Link>
            <Nav.Link href="#about" className="text-dark">
              About
            </Nav.Link>
            <Nav.Link href="#login" className="text-dark">
              Login
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <ButtonComponent text="Management Quote" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
