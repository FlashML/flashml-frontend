import React from "react";

import StaticLayer from "components/Layers/StaticLayer.js"

const layers = [
  {
    name: "Input",
    color: "#24C700",
  },
  {
    name: "Convolution 2D",
    color: "#007DC7",
  },
  {
    name: "Relu",
    color: "#F7C500",
  },
  {
    name: "Maxpool 2D",
    color: "#959595",
  }
]

const RightConfig = ({ activeLayers, currentId, setCurrentId  }) => {
  const handleClick = (name, color) => {
    activeLayers.push({
      id: currentId,
      name: name,
    })

    setCurrentId(currentId + 1)
  }

  return (
    <div
      className="border rounded px-3 py-3"
      style={{
        backgroundColor: "#F2F2F2",
        height: "100%",
      }}
    >
      <p>Click a layer to add it to your model!</p>
      {
        layers.map((val, key) => (
          <StaticLayer 
            color={ val.color } 
            name={ val.name } 
            handleClick={ () => handleClick(val.name, val.color)  }
            activeLayers={activeLayers} 
          />
        ))
      }
    </div>
  )
}

export default RightConfig;
