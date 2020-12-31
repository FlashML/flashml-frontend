
import React, {useState} from "react";
import {
  Row, 
  Col,
  Button,
  Tooltip
} from "reactstrap";

import Instructions from "../Tooltips/Instructions.js"
import UploadTooltip from "../Tooltips/UploadTooltip.js"

const MainBar = ({downloadRequest, downloadCurrentState, uploadCurrentState}) => {
  const [helpTooltipOpen, setHelpTooltipOpen] = useState(false);
  const [uploadTooltipOpen, setUploadTooltipOpen] = useState(false);

  const menuButtons = [
    {
      name: "Generate Code",
      action: downloadRequest,
    },
    {
      name: "Save",
      action: downloadCurrentState,
    },
    {
      name: "Upload",
      action: uploadCurrentState,
    },
    {
      name: "Help",
      action: () => {},
    },
  ]

  return (
    <Row 
      className="mt-2 mb-2"
    >
      <Col lg="3"
        style={{
          verticalAlign: 'center'
        }}
      >
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
      <Col lg="6">
      {
        menuButtons.map(function (item, _) {
          return (
            <Button 
              className="mt-2 py-2" 
              id={item.name}
              color="primary" 
              type="button"
              size="sm"
              onClick={item.action}
              style={{
                color: "white",
                marginTop: "10px",
                backgroundColor: "#8600E8",
                border: 'none'
              }}
            >
              {item.name}
            </Button>
          ) 
        })
      }
        <Tooltip
          placement="bottom"
          isOpen={uploadTooltipOpen}
          target="Upload"
          style={{
            width: "250px",
          }}
          toggle={() => setUploadTooltipOpen(!uploadTooltipOpen)}
        >
          <UploadTooltip />
        </Tooltip>
        <Tooltip
          placement="bottom"
          isOpen={helpTooltipOpen}
          target="Help"
          style={{
            width: "250px",
          }}
          toggle={() => setHelpTooltipOpen(!helpTooltipOpen)}
        >
          <Instructions />
        </Tooltip>
      </Col>
      <Col lg="3" clasName="justify-content-center">
      </Col>
    </Row>
  )
}

export default MainBar;
