import React, { useState } from "react";

import {
  Row, 
  Col, 
  Input,
  Button
} from "reactstrap";


const FcConfigForm = ({ layer, setActiveId }) => {
  const [size, setSize] = useState(layer.size);


  /* Update activeLayers by changing the values of the obj in activeId */
  const onSave = () => {
    layer.size = size;
    setActiveId(null);
  }

  return (
    <>
      <Row className="mt-2">
        <Col lg="6">
          <p>Kernel Size (Square)</p>
        </Col>
        <Col lg="6">
          <Input type="text" name="width" placeholder="32" value={ size } onChange={(e) => setSize(e.target.value)}/>
        </Col>
      </Row>
      <Button className="mt-2" color="success" onClick={onSave}>Save</Button>
    </>
  );
}

export default FcConfigForm;
