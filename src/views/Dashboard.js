/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Button,
  Tooltip
} from "reactstrap";

import MainBar from "../components/Navbars/MainBar.js";
import LeftConfig from "../components/Playground/LeftConfig.js"
import ModelPlayground from "../components/Playground/ModelPlayground.js"
import RightConfig from "../components/Playground/RightConfig.js"
import LayerFactory from "../model/factory/LayerFactory.js"
import Instructions from "./Instructions.js"

const inputLayer = LayerFactory.createLayerFromName("Input");
const REACT_APP_BACKEND_DOMAIN = "http://127.0.0.1:5000/"

const Dashboard = () => {
  // Left Config State
  const [optimizer, setOptimizer] = useState();
  const [learningRate, setLearningRate] = useState(0.001);
  const [lossFunction, setLossFunction] = useState();
  const [trainBS, setTrainBS] = useState(32);
  const [epochs, setEpochs] = useState(10);
  const [testBS, setTestBS] = useState(32);
  const [dataset, setDataset] = useState('CIFAR10');
  const [savePath, setSavePath] = useState('/foo/bar/checkpoint.pt');
  // Model Playground State
  const [activeLayers, setActiveLayers] = useState([inputLayer]);
  // Right Config State
  const [activeId, setActiveId] = useState();
  // Other
  const [tooltipOpen, setTooltipOpen] = useState(false);

	const sendData = async function() {
    const data = JSON.stringify({
        layers: activeLayers.map((layer) => layer.toJson()),
				hyperparameters: {
					epochs: epochs,
					learning_rate: learningRate,
					momentum: 0.1,
					batch_size: trainBS,
					num_workers: 4,
					loss: lossFunction,
				},
				checkpoint_path: savePath,
				dataset_name: dataset,
			})

    console.log(data)
		return await fetch(REACT_APP_BACKEND_DOMAIN + "api/create_code", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				"Access-Control-Allow-Origin": REACT_APP_BACKEND_DOMAIN
			},
			body: data,
    })
    .then(async function(res) {
      const element = document.createElement("a");
      const file = await res.blob();
      element.href = URL.createObjectURL(file);
      element.download = "flashml.zip";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    })
      .catch(error => {
        console.log(error);
        alert("Unable to download file. Please make sure that you have filled in all the model configurations")
      })
	}

  return (
    <>
      <MainBar 
				downloadRequest={sendData}
			/>
      <Container fluid className="mx-2">
        <Row className="mt-1 mb-2"
          style={{
            height: "90vh"
          }}
        >
          <Col className="px-0 mr-2">
            <h6 className="text-center"
              style={{
                fontWeight: "bold",
              }}
            >
              Configurations
            </h6>
            <LeftConfig 
              optimizer={optimizer}
              setOptimizer={setOptimizer}
              learningRate={learningRate}
              setLearningRate={setLearningRate}
              lossFunction={lossFunction}
              setLossFunction={setLossFunction}
              trainBS={trainBS}
              setTrainBS={setTrainBS}
              epochs={epochs}
              setEpochs={setEpochs}
              testBS={testBS}
              setTestBS={setTestBS}
              dataset={dataset}
              setDataset={setDataset}
              savePath={savePath}
              setSavePath={setSavePath}
            />
          </Col>
          <Col lg="6" className="px-0">
            <h6 className="text-center"
              style={{
                fontWeight: "bold",
              }}
            >
              Model Playground 
                <Button
                  className="ml-2 text-center"
                  id="instructions"
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "16px",
                    color: "white",
                    height: "30px",
                    width: "30px",
                    borderRadius: "100%",
                    background: "#BEBEBE",
                  }}
                >
                  ?
                </Button>
              <Tooltip
                placement="right"
                isOpen={tooltipOpen}
                target="instructions"
                style={{
                  width: "250px",
                }}
                toggle={() => setTooltipOpen(!tooltipOpen)}
              >
                <Instructions />
              </Tooltip>
            </h6>
            <ModelPlayground 
              activeLayers={ activeLayers }
              setActiveId={ setActiveId }
            />
          </Col>
          <Col className="px-0 ml-2">
            <h6 className="text-center"
              style={{
                fontWeight: "bold",
              }}
            >
              Layers
            </h6>
            <RightConfig 
              activeLayers={ activeLayers }
              setActiveLayers= { setActiveLayers }
              activeId={ activeId }
              setActiveId={ setActiveId }
            />
          </Col>
        </Row>
      </Container>
        <Row
        >
        </Row>
    </>
  )

}

export default Dashboard;
