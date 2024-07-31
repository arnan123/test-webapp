import React from "react";
import { ArrowUpRightCircleFill } from "react-bootstrap-icons";
import { Card, Col, Image, Row } from "react-bootstrap";
import image5 from "../../public/image-5.png"; // Ensure this import path is correct

function NewsCard() {
  return (
    <Row className="g-4">
      {/* Image Card */}
      <Col md={6} className="d-flex flex-column">
        <Card className="position-relative border-0">
          <div className="position-relative d-inline-block w-100">
            <Image src={image5} alt="Sample" fluid className="rounded-2xl" style={{borderRadius:'1rem'}} />
            <ArrowUpRightCircleFill
              className="position-absolute bottom-0 end-0 m-2 bg-black rounded-circle"
              style={{ width: "2rem", height: "2rem", color: "white" }}
            />
          </div>
          <Card.Body className="p-3">
            <Card.Text className="mt-2 fw-semibold text-start" style={{ fontSize: "14px" }}>
              Super Enticing Blog Post Title That Users Can’t Help But Read.
            </Card.Text>
            <Card.Text
              className="text-muted italic text-start"
              style={{ fontSize: "11px" }}
            >
              March 5th, 2026
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card className="bg-light rounded-2xl p-4 border-0">
          <Card.Body>
            <Card.Title className="mb-2 text-start" style={{ fontSize: "14px" }}>
              Super Enticing Blog Post Title That Users Can’t Help But Read.
            </Card.Title>
            <Card.Text className="text-muted mb-2 text-start" style={{ fontSize: "11px" }}>
              March 5th, 2026
            </Card.Text>
            <Card.Text className="text-start text-dark" style={{ fontSize: "11px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default NewsCard;
