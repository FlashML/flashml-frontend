import React from "react";

import {
  Button
} from "reactstrap";

import StaticLayer from "components/Layers/StaticLayer.js"
import layers from "components/Layers/layers.js"

const RightConfig = ({ activeLayers, nextId, setNextId, openLayerConfig, setOpenLayerConfig  }) => {
  const handleClick = (name) => {
    activeLayers.push({
      id: nextId,
      name: name,
    })

    setNextId(nextId + 1)
  }

  const onLayerConfigClose = () => {
    setOpenLayerConfig(false);
  }

  return (
    <div
      className="border rounded px-3 py-3"
      style={{
        backgroundColor: "#F2F2F2",
        height: "100%",
      }}
    >
    { openLayerConfig ? (
        <>
          <p>
            Configure this layer!
            <Button 
              size="sm" 
              onClick={onLayerConfigClose}
              style={{ 
                float: "right", 
                backgroundColor: "white",
              }}
            >
              x
            </Button>
          </p>
        </>
      ) : (
        <>
          <p>Click a layer to add it to your model!</p>
          { 
            Object.keys(layers).map((key, _) => (
              <>
                <StaticLayer 
                  color={ layers[key].color } 
                  name={ key } 
                  handleClick={ () => handleClick(key)  }
                />
                <div
                  style={{
                    height: "6px"
                  }}
                >
                </div>
              </>
            ))
          }
        </>
      )
    }
    </div>
  )
}

export default RightConfig;
