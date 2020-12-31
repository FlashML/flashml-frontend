
import React, {useState, useRef} from "react";
import {
  Row, 
  Col,
  Button,
  Tooltip
} from "reactstrap";

import Instructions from "../Tooltips/Instructions.js"
import UploadTooltip from "../Tooltips/UploadTooltip.js"

const MainBar = ({downloadRequest, downloadCurrentState, handleUploadedFile}) => {
  const [helpTooltipOpen, setHelpTooltipOpen] = useState(false);
  const [uploadTooltipOpen, setUploadTooltipOpen] = useState(false);

  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleUploadedFile(fileUploaded);
  };

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
      action: handleClick,
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
        height: "65px",
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
        menuButtons.map(function (item, index) {
          return (
            <Button 
              className="mt-0" 
              id={item.name}
              key={index}
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
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{display: 'none'}}
        />
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
