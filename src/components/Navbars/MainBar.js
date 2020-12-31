
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
      className="mt-0 mb-3 align-items-center"
      style={{
        backgroundColor: "#8600E8",
        height: "9vh",
      }}
    >
      <Col lg="3"
        className="text-center"
        style={{
          verticalAlign: 'center'
        }}
      >
        <h3 
          className="justify-content-center ml-4 mb-0"
          style={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          Flash-ML
        </h3>
      </Col>
      <Col lg="6" className="text-center">
      {
        menuButtons.map(function (item, _) {
          return (
            <Button 
              className="mt-0" 
              id={item.name}
              color="primary" 
              type="button"
              size="sm"
              onClick={item.action}
              style={{
                color: "white",
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
      <Col lg="3" className="text-center">
        <Button 
          className="mt-0" 
          color="primary" 
          type="button"
          size="sm"
          onClick={() => window.location.href='mailto:rahuldesai@berkeley.edu'}
          style={{
            color: "white",
            background: "#8600E8",
            borderColor: '#8600E8'
          }}
        >
          Contact
        </Button>
      </Col>
    </Row>
  )
}

export default MainBar;
