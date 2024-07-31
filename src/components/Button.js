import React from "react";
import Button from "react-bootstrap/Button";

function ButtonComponent({ text = "" }) {
  return (
    <Button
      className="rounded-pill px-4 py-2"
      style={{ backgroundColor: '#039444', borderColor: '#039444', fontSize: '14px', color: 'white' }}
    >
      {text}
    </Button>
  );
}

export default ButtonComponent;
