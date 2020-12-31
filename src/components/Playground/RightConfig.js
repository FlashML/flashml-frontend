import React from "react";

import {
  Button
} from "reactstrap";

import StaticLayer from "components/Layers/StaticLayer.js"
import LayerConfigForm from "components/Forms/LayerConfigForm.js"
import LayerFactory from "model/factory/LayerFactory.js"

import { getLayerFromId } from "utils/ModelUtils.js";

const RightConfig = ({ activeLayers, setActiveLayers, activeId, setActiveId }) => {
  const addLayer = (name) => {
    let layerToAdd = LayerFactory.createLayerFromName(name)
    const newList = activeLayers.concat(layerToAdd);
    setActiveLayers(newList);
  }

  const onLayerConfigClose = () => {
    setActiveId(null);
  }

	const  renderSwitch = () => {
    if (activeId != null) {
      return (
        <div>
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
          Layer { activeId }
          <LayerConfigForm layer={getLayerFromId(activeId, activeLayers)} setActiveId={setActiveId} />
        </div>
      );
    } else {
        return (
        <div>
          <p>Click a layer to add it to your model!</p>
          { 
            LayerFactory.getAllAvailableLayers().map((obj, index) => (
              <div key={index}>
                <StaticLayer 
                  color={ obj.color } 
                  name={ obj.label } 
                  handleClick={ () => addLayer(obj.label)  }
                  removable={ false }
                />
                <div
                  style={{
                    height: "6px"
                  }}
                >
                </div>
              </div>
            ))
          }
        </div>
      );
    }
  }
	
  return (
    <div
      className="border rounded px-3 py-3"
      style={{
        backgroundColor: "#F2F2F2",
        height: "100%",
      }}
    >
			{ renderSwitch() }
		</div>
	);
}


export default RightConfig;
