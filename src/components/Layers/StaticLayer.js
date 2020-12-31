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
        padding: "0",
      }}
    >
      {name}
      {removable ? 
        (
          <>
            <div
              size="sm"
              className='mr-2'
              style={{
                height: '100%',
                float: 'right',
                color: 'white',
                backgroundColor: color,
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={remove}
            >
              x
            </div>     
          </>
        )
        : (
          null
        )
      }
    </Col>
  )
}

export default StaticLayer;
