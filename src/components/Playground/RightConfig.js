import React from "react";

import {
  Button
} from "reactstrap";

import StaticLayer from "components/Layers/StaticLayer.js"
import LayerFactory from "controller/factory/LayerFactory.js"

const RightConfig = ({ activeLayers, setActiveLayers, activeId, setActiveId }) => {
  const addLayer = (name) => {
    const newList = activeLayers.concat(LayerFactory.createLayerFromName(name));
    setActiveLayers(newList);
  }

  const onLayerConfigClose = () => {
    setActiveId(null);
  }

  return (
    <div
      className="border rounded px-3 py-3"
      style={{
        backgroundColor: "#F2F2F2",
        height: "100%",
      }}
    >
    { activeId != null ? (
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
                  handleClick={ () => addLayer(obj.name)  }
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
