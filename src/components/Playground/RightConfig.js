import React from "react";

import {
  Button
} from "reactstrap";

import StaticLayer from "components/Layers/StaticLayer.js"
import LayerFactory from "controller/factory/LayerFactory.js"

const RightConfig = ({ activeLayers, nextId, setNextId, openLayerConfig, setOpenLayerConfig, activeId, setActiveId }) => {
  const handleClick = (name) => {
    activeLayers.push(
      <StaticLayer 
        name={name} 
        handleClick={onLayerConfigOpen}
      />
    )

    setNextId(nextId + 1)
  }

  const onLayerConfigOpen = () => {
    setActiveId(nextId);
    setOpenLayerConfig(true);
  }

  const onLayerConfigClose = () => {
    setActiveId(null);
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
          Layer Id: { activeId }
        </>
      ) : (
        <>
          <p>Click a layer to add it to your model!</p>
          { 
            LayerFactory.getAllAvailableLayers().map((obj, _) => (
              <>
                <StaticLayer 
                  color={ obj.color } 
                  name={ obj.name } 
                  handleClick={ () => handleClick(obj.name)  }
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
