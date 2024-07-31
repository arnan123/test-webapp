/* eslint-disable jsx-a11y/anchor-is-valid */
// components/Footer.tsx

import React from "react";
import logo from "../public/logo.png";
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4">
      <Container>
        <Row className="mb-5 text-center">
          <Col xs={12} md={2} className="d-flex justify-content-center">
            <div className="d-flex justify-content-center">
                <Image src={logo} alt="Logo" width={156} height={100} />
            </div>
          </Col>
          <Col xs={12} md={2} className="d-flex flex-column">
            <p className="font-weight-bold mb-2">Owners</p>
            <a href="#" className="text-decoration-none text-dark">Owner Portal</a>
            <a href="#" className="text-decoration-none text-dark">Owner FAQs</a>
            <a href="#" className="text-decoration-none text-dark">Pricing</a>
          </Col>
          <Col xs={12} md={2} className="d-flex flex-column">
            <p className="font-weight-bold mb-2">Residents</p>
            <a href="#" className="text-decoration-none text-dark">Resident Portal</a>
            <a href="#" className="text-decoration-none text-dark">Resident FAQs</a>
            <a href="#" className="text-decoration-none text-dark">Resident Resources</a>
          </Col>
          <Col xs={12} md={3} className="d-flex flex-column">
            <p className="font-weight-bold mb-2">Office</p>
            <p className="mb-1">641 Lincoln Way West</p>
            <p>Massillon, OH 44647</p>
          </Col>
          <Col xs={12} md={3} className="d-flex flex-column">
            <p className="font-weight-bold mb-2">Contact</p>
            <p className="mb-1">(330) 600-4556</p>
            <a href="mailto:Clients@stewardshiprealtyllc.com" className="text-decoration-none text-dark">Clients@stewardshiprealtyllc.com</a>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="text-muted">
              Copyright 2024 Stewardship Realty & Management. All Rights Reserved. Property Manager Website powered by PMW Sitemap Privacy Policy Stewardship Realty & Management is committed to ensuring that its website is accessible to people with disabilities. All the pages on our website will meet W3C WAI`s Web Content Accessibility Guidelines 2.0, Level A conformance. Any issues should be reported to email here. Website Accessibility Policy
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
