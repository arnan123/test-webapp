import React from "react";
import { RocketTakeoff } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";

function DiscoverCard({ title, content, logo }) {
  return (
    <Card className="d-flex flex-row align-items-center p-3 mb-3 mb-md-4 border-0">
      <Card.Body className="d-flex align-items-start gap-3">
        <div
          className="d-flex align-items-center justify-content-center bg-light rounded-circle"
          style={{ width: "100px", height: "2.5rem" }}
        >
          {logo}
        </div>
        <div>
          <Card.Title className="text-primary mb-2 text-start fw-bold" style={{ fontSize: "14px", lineHeight: "1.5" }}>{title}</Card.Title>
          <Card.Text
            className="mb-2 text-start"
            style={{ fontSize: "12px", lineHeight: "2" }}
          >
            {content}
          </Card.Text>
          <div className="text-success text-start fw-bold" style={{ fontSize: "12px" }}>
            Details +
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DiscoverCard;
