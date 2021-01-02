import React from "react";

import {
  Col,
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
        position: 'relative'
      }}
    >
      {name}
      {removable ? 
        (
          <>
            <div
              size="sm"
              className='mr-2 pr-2'
              style={{
                height: '100%',
                color: 'white',
                backgroundColor: color,
                border: 'none',
                cursor: 'pointer',
                position: 'absolute',
                right: '0',
                top: '0',
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
