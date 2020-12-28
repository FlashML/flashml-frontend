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

import {
  Container,
  Row,
  Col
} from "reactstrap";

import MainBar from "../components/Navbars/MainBar.js";
import LeftConfig from "../components/Playground/LeftConfig.js"
import ModelPlayground from "../components/Playground/ModelPlayground.js"
import RightConfig from "../components/Playground/RightConfig.js"
import LayerFactory from "../model/factory/LayerFactory.js"
import Input from "../model/layers/Input.js"

const inputLayer = LayerFactory.createLayerFromName("Input");
const REACT_APP_BACKEND_DOMAIN = "http://127.0.0.1:5000/"

const Dashboard = () => {
  // Left Config State
  const [optimizer, setOptimizer] = useState();
  const [learningRate, setLearningRate] = useState();
  const [lossFunction, setLossFunction] = useState();
  const [trainBS, setTrainBS] = useState();
  const [epochs, setEpochs] = useState();
  const [testBS, setTestBS] = useState();
  const [savePath, setSavePath] = useState();
  // Model Playground State
  const [activeLayers, setActiveLayers] = useState([inputLayer]);
  // Right Config State
  const [activeId, setActiveId] = useState();

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
				dataset_name: 'CIFAR10'
			})

    console.log(data)
		return await fetch(REACT_APP_BACKEND_DOMAIN + "api/create_code", {
			method: "POST",
			headers: {
				"Content-type": "application/x-www-form-urlencoded",
				"Access-Control-Allow-Origin": REACT_APP_BACKEND_DOMAIN
			},
			body: data,
    })
    .then(res => {
      const element = document.createElement("a");
      const file = new Blob([res.blob], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "train.py";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
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
