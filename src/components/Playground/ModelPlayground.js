
import React from "react";

const ModelPlayground = ({ activeLayers, setActiveId }) => {
  return (
    <div
      className="border rounded text-center py-3 px-5"
      style={{
        backgroundColor: "#F2F2F2",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      {
        activeLayers.map((val) => (
          <div>
            { val.renderComponent(setActiveId) }
            <div
              style={{
                margin: "0 auto",
                height: "16px",
                width: "3px",
                backgroundColor: "#808080",
              }}
            >
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ModelPlayground;
