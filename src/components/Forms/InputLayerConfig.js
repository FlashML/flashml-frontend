import React, { useState } from "react";

import {
  Row, 
  Col, 
  Input,
  Button
} from "reactstrap";


const InputConfigForm = ({ layer, setActiveId }) => {
  const [width, setWidth] = useState(layer.width);
  const [height, setHeight] = useState(layer.height);
  const [depth, setDepth] = useState(layer.depth);


  /* Update activeLayers by changing the values of the obj in activeId */
  const onSave = () => {
    layer.width = width;
    layer.height = height;
    layer.depth = depth;
    setActiveId(null);
  }

  return (
    <>
      <Row className="mt-2">
        <Col lg="6">
          <p>Width</p>
        </Col>
        <Col lg="6">
          <Input type="text" name="width" placeholder="32" value={ width } onChange={(e) => setWidth(e.target.value)}/>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg="6">
          <p>Height</p>
        </Col>
        <Col lg="6">
          <Input type="text" name="height" placeholder="32" value={ height } onChange={(e) => setHeight(e.target.value)} />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg="6">
          <p>Depth</p>
        </Col>
        <Col lg="6">
          <Input type="text" name="depth" placeholder="3" value={ depth } onChange={(e) => setDepth(e.target.value)} />
        </Col>
      </Row>
      <Button className="mt-2" color="success" onClick={onSave}>Save</Button>
    </>
  );
}

export default InputConfigForm;
