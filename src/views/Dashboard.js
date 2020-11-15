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
import React from "react";

import {
  Container,
  Row,
  Col
} from "reactstrap";

import MainBar from "../components/Navbars/MainBar.js";
import LeftConfig from "../components/Playground/LeftConfig.js"
import ModelPlayground from "../components/Playground/ModelPlayground.js"
import RightConfig from "../components/Playground/RightConfig.js"

const Dashboard = () => {
  return (
    <>
      <MainBar />
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
              Training Config
            </h6>
            <LeftConfig />
          </Col>
          <Col lg="6" className="px-0">
            <h6 className="text-center"
              style={{
                fontWeight: "bold",
              }}
            >
              Model Playground
            </h6>
            <ModelPlayground />
          </Col>
          <Col className="px-0 ml-2">
            <h6 className="text-center"
              style={{
                fontWeight: "bold",
              }}
            >
              Layers
            </h6>
            <RightConfig />
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
