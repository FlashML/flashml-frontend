
import React, { useState } from "react";

import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from "reactstrap";

const LeftConfig = ({optimizer, setOptimizer, lossFunction, setLossFunction}) => {
  const [optimDropdownOpen, setOptimDropdownOpen] = useState(false);
  const [lfDropdownOpen, setLfDropdownOpen] = useState(false);

  const handleOptimizerChange = (event) => {
    setOptimizer(event.target.value);
  }

  const handleLossChange = (event) => {
    setLossFunction(event.target.value);
  }

  return (
    <div
      className="border rounded px-3 py-3"
      style={{
        backgroundColor: "#F2F2F2",
        height: "100%",
        overflowX: "scroll",
      }}
    >
    <h6>Optimization</h6>
      <Row className="mt-2">
        <Col lg="6">
          <p>Optimizer</p>
        </Col>
        <Col lg="6">
          <Dropdown 
            isOpen={optimDropdownOpen} 
            toggle={() => setOptimDropdownOpen(!optimDropdownOpen)}
          >
            <DropdownToggle 
              caret
              style={{
                backgroundColor: "white",
              }}
            >
              {optimizer == null ? "Select" : optimizer}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={handleOptimizerChange} value="SGD">Stochastic Gradient Descent</DropdownItem>
              <DropdownItem onClick={handleOptimizerChange} value="Adam">Adam</DropdownItem>
              <DropdownItem onClick={handleOptimizerChange} value="RMSProp">RMSProp</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg="6">
          <p>Learning Rate</p>
        </Col>
        <Col lg="6">
          <Input type="text" name="learningrate" id="lr" placeholder="0.001" />
        </Col>
      </Row>
      <h6 className="mt-2">Training</h6>
      <Row className="mt-2">
        <Col lg="6">
          <p>Loss Function</p>
        </Col>
        <Col lg="6">
          <Dropdown 
            isOpen={lfDropdownOpen} 
            toggle={() => setLfDropdownOpen(!lfDropdownOpen)}
          >
            <DropdownToggle 
              caret
              style={{
                backgroundColor: "white",
              }}
            >
              {lossFunction == null ? "Select" : lossFunction}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={handleLossChange} value="L2">Mean Square Error</DropdownItem>
              <DropdownItem onClick={handleLossChange} value="L1">Mean Absolute Error</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg="6">
          <p>Batch Size</p>
        </Col>
        <Col lg="6">
          <Input type="text" name="batchSize" id="bs" placeholder="32" />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg="6">
          <p># of Epochs</p>
        </Col>
        <Col lg="6">
          <Input type="text" name="epochs" id="epochs" placeholder="10" />
        </Col>
      </Row>
    <h6 className="mt-2">Test</h6>
      <Row className="mt-2">
        <Col lg="6">
          <p>Batch Size</p>
        </Col>
        <Col lg="6">
          <Input type="text" name="testBatchSize" id="testBS" placeholder="32" />
        </Col>
      </Row>
    <h6 className="mt-2">Other</h6>
      <Row className="mt-2">
        <Col lg="6">
          <p># of GPUs</p>
        </Col>
        <Col lg="6">
          <Input type="text" name="testBatchSize" id="testBS" placeholder="32" />
        </Col>
      </Row>
      <p>Model Save Path</p>
      <Input type="text" name="text" id="exampleText" placeholder="/foo/bar/checkpoint.pt" />
    </div>
  )
}

export default LeftConfig;
