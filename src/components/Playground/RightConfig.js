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

	function renderSwitch(activeId) {
		switch(activeId) {
				case activeId > 0: 
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
						Layer Id: { activeId }
						<LayerConfigForm layer={getLayerFromId(activeId, activeLayers)} />
					</div>
				);
        
				case activeId===null:
					return (
					<div>
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
			{renderSwitch(activeId)}
		</div>
	);
}


export default RightConfig;
