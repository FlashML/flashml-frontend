
import React from "react";

import layers from "components/Layers/layers.js"
import StaticLayer from "components/Layers/StaticLayer.js"

const ModelPlayground = ({ activeLayers, setOpenLayerConfig }) => {
  const handleClicked = () => {
    setOpenLayerConfig(true);
  }

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
            <StaticLayer
              name={val.name}
              color={layers[val.name].color}
              handleClick={handleClicked}
            />
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
