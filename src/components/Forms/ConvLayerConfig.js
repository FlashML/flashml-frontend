import React, { useState } from "react";

import {
  Row, 
  Col, 
  Input,
  Button
} from "reactstrap";


const ConvConfigForm = ({ layer, setActiveId }) => {
  const [kernelSize, setKernelSize] = useState(layer.kernelSize);
  const [numFilters, setNumFilters] = useState(layer.numFilters);


  /* Update activeLayers by changing the values of the obj in activeId */
  const onSave = () => {
    layer.kernelSize = kernelSize;
    layer.numFilters = numFilters;
    setActiveId(null);
  }

  return (
    <>
      <Row className="mt-2">
        <Col lg="6">
          <p>Kernel Size (Square)</p>
        </Col>
        <Col lg="6">
          <Input type="text" name="width" placeholder="32" value={ kernelSize } onChange={(e) => setKernelSize(e.target.value)}/>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg="6">
          <p># of Filters</p>
        </Col>
        <Col lg="6">
          <Input type="text" name="height" placeholder="32" value={ numFilters } onChange={(e) => setNumFilters(e.target.value)} />
        </Col>
      </Row>
      <Button className="mt-2" color="success" onClick={onSave}>Save</Button>
    </>
  );
}

export default ConvConfigForm;
