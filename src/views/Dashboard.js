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

import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

import MainBar from "../components/Navbars/MainBar.js";
import LeftConfig from "../components/Playground/LeftConfig.js"
import ModelPlayground from "../components/Playground/ModelPlayground.js"
import RightConfig from "../components/Playground/RightConfig.js"
import LayerFactory from "../model/factory/LayerFactory.js"
import { getCurrentStateJson } from "../utils/ModelUtils.js"

const inputLayer = LayerFactory.createLayerFromName("Input");

const PROD = false;
var REACT_APP_BACKEND_DOMAIN = "http://127.0.0.1:5000/";
if (PROD) {
	REACT_APP_BACKEND_DOMAIN = "https://beta.flash-ml.com/";
}

const Dashboard = () => {
  // Left Config State
  const [optimizer, setOptimizer] = useState('SGD');
  const [learningRate, setLearningRate] = useState(0.001);
  const [lossFunction, setLossFunction] = useState('L2');
  const [trainBS, setTrainBS] = useState(32);
  const [epochs, setEpochs] = useState(10);
  const [testBS, setTestBS] = useState(32);
  const [dataset, setDataset] = useState('CIFAR10');
  const [savePath, setSavePath] = useState('checkpoint.pt');
  // Model Playground State
  const [activeLayers, setActiveLayers] = useState([inputLayer]);
  // Right Config State
  const [activeId, setActiveId] = useState();

  useEffect(() => {
    window.onbeforeunload = (e) => {
      return ''
    };

    return () => window.onbeforeunload = null
  }, [])

  const downloadCurrentState = () => {
    var content = getCurrentStateJson(activeLayers, epochs, optimizer, learningRate, trainBS, lossFunction, savePath, dataset)
    var a = document.createElement("a");
    var file = new Blob([content], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = 'flash-save-' + Math.floor(Date.now() / 1000) + '.json';
    a.click();
  }

  const handleUploadedFile = (file) => {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
      const data = JSON.parse(evt.target.result)
      setOptimizer(data['optimizer']);
      setDataset(data['dataset_name'])
      setSavePath(data['checkpoint_path'])
      setLearningRate(data['hyperparameters']['learning_rate'])
      setLossFunction(data['hyperparameters']['loss'])
      setTrainBS(data['hyperparameters']['trainBS'])
      setTestBS(data['hyperparameters']['testBS'])
      setActiveLayers(data['layers'].map(item => LayerFactory.creatLayerFromList(item)));
    }
    reader.onerror = function () {
      alert("An error occured while parsing the file.")
    }
  }

	const sendData = async function() {
    const data = getCurrentStateJson(activeLayers, epochs, optimizer, learningRate, trainBS, lossFunction, savePath, dataset)
    console.log(data)
		return await fetch(REACT_APP_BACKEND_DOMAIN + "api/create_code", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
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
        downloadCurrentState={downloadCurrentState}
        handleUploadedFile={handleUploadedFile}
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
            </h6>
            <ModelPlayground 
              activeLayers={ activeLayers }
              setActiveLayers={ setActiveLayers }
              activeId={ activeId }
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
