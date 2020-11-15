
import React from "react";

import {
  Row, 
  Col,
  Button
} from "reactstrap";

const MainBar = () => {
  return (
    <Row 
      className="mt-1"
    >
      <Col lg="9">
        <h3 
          className="ml-4"
          style={{
            fontWeight: "bold",
            color: "#8600E8"
          }}
        >
          Flash-ML
        </h3>
      </Col>
      <Col lg="3" clasName="justify-content-center">
        <Button 
          className="" 
          color="primary" 
          type="button"
          style={{
            color: "white",
            backgroundColor: "#8600E8"
          }}
        >
            Download
        </Button>
      </Col>
    </Row>
  )
}

export default MainBar;
