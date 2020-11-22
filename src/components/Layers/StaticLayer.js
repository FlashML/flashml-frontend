import React from "react";

import {
  Col
} from "reactstrap";

const StaticLayer = ({ color, name, handleClick }) => {
  return (
    <Col
      className="border rounded text-center py-1"
      onClick={ handleClick }
      style={{
        backgroundColor: color,
        color: "white",
      }}
    >
      <span>{name}</span>
    </Col>
  )
}

export default StaticLayer;
