import React from "react";

import {
  Col,
  Button
} from "reactstrap";

const StaticLayer = ({ color, name, handleClick, removable, onRemove }) => {

  const remove = (event) => {
    onRemove();
    event.stopPropagation();
  }

  return (
    <Col
      className="border rounded text-center py-1"
      onClick={ handleClick }
      style={{
        backgroundColor: color,
        color: "white",
      }}
    >
      <span>
        {name}
        {removable ? 
          (
            <>
              <Button
                size="sm"
                style={{
                  height: '100%',
                  float: 'right',
                  color: 'white',
                  backgroundColor: color,
                  border: 'none'
                }}
                onClick={remove}
              >
                x
              </Button>     
            </>
          )
          : (
            null
          )
        }
      </span>
    </Col>
  )
}

export default StaticLayer;
