import React from "react";
import { RocketTakeoff } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";

function HireCard() {
  return (
    <Card className="d-flex flex-row align-items-center p-3 border-0 text-light mx-auto text-start" style={{ maxWidth: '40rem', width: '100%',backgroundColor:'#222323' }}>
      <Card.Body className="d-flex gap-4">
        <div
          className="d-flex align-items-center justify-content-center bg-light rounded-circle"
          style={{ width: "7.5rem", height: "2.5rem" }}
        >
          <RocketTakeoff
            className="text-success"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>

        <div>
          <Card.Title className="fw-semibold mb-2" style={{fontSize:'14px'}}>
            Significantly Less Stress & Time Involvement
          </Card.Title>
          <Card.Text style={{ fontSize: "12px", lineHeight: "2" }}>
            One of the single greatest struggles of owning rental real estate
            can be the day-to-day involvement of responding to residents,
            coordinating vacancy renovations/repairs, showing vacant units,
            chasing delinquent rents, and on and on!... This is one of the key
            reasons why investors reach out to us again and again.
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default HireCard;
