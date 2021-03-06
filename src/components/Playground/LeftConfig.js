
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

const LeftConfig = ({optimizer, setOptimizer, learningRate, setLearningRate, lossFunction, setLossFunction, trainBS, setTrainBS, epochs, setEpochs, testBS, setTestBS, dataset, setDataset, savePath, setSavePath}) => {
  const [optimDropdownOpen, setOptimDropdownOpen] = useState(false);
  const [datasetDropdownOpen, setDatasetDropdownOpen] = useState(false);
  const [lfDropdownOpen, setLfDropdownOpen] = useState(false);

  const handleOptimizerChange = (event) => {
    setOptimizer(event.target.value);
  }

  const handleLossChange = (event) => {
    setLossFunction(event.target.value);
  }

  const handleDatasetChange = (event) => {
    setDataset(event.target.value);
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
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg="6">
          <p>Learning Rate</p>
        </Col>
        <Col lg="6">
          <Input type="text" style={{color:"black"}} name="learningrate" id="lr" value={learningRate} onChange={(e) => setLearningRate(e.target.value)} />
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
              <DropdownItem onClick={handleLossChange} value="L2">Mean Square Error (L2)</DropdownItem>
              <DropdownItem onClick={handleLossChange} value="L1">Mean Absolute Error (L1)</DropdownItem>
              <DropdownItem onClick={handleLossChange} value="CE">Cross Entropy (CE) </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg="6">
          <p>Batch Size</p>
        </Col>
        <Col lg="6">
          <Input type="text" style={{color:"black"}} name="batchSize" id="bs" value={trainBS} onChange={(e) => setTrainBS(e.target.value)} />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg="6">
          <p># of Epochs</p>
        </Col>
        <Col lg="6">
          <Input type="text" style={{color:"black"}} name="epochs" id="epochs" value={epochs} onChange={(e) => setEpochs(e.target.value)}/>
        </Col>
      </Row>
    <h6 className="mt-2">Test</h6>
      <Row className="mt-2">
        <Col lg="6">
          <p>Batch Size</p>
        </Col>
        <Col lg="6">
          <Input type="text" style={{color:"black"}} name="testBatchSize" id="testBS" value={testBS} onChange={(e) => setTestBS(e.target.value)}/>
        </Col>
      </Row>
    <h6 className="mt-2">Other</h6>
      <Row className="mt-2">
        <Col lg="6">
          <p>Dataset</p>
        </Col>
        <Col lg="6">
          <Dropdown 
            isOpen={datasetDropdownOpen} 
            toggle={() => setDatasetDropdownOpen(!datasetDropdownOpen)}
          >
            <DropdownToggle 
              caret
              style={{
                backgroundColor: "white",
              }}
            >
              {dataset == null ? "Select" : dataset}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={handleDatasetChange} value="CIFAR10">CIFAR-10</DropdownItem>
              <DropdownItem onClick={handleDatasetChange} value="CIFAR100">CIFAR-100</DropdownItem>
              <DropdownItem onClick={handleDatasetChange} value="FashionMNIST">Fashion-MNIST</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <p>Model Save Path</p>
      <Input type="text" style={{color:"black"}} name="text" id="exampleText" value={savePath} onChange={(e) => setSavePath(e.target.value)}/>
    </div>
  )
}

export default LeftConfig;
