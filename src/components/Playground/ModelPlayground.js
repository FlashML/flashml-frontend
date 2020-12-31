
import React from "react";

import StaticLayer from "components/Layers/StaticLayer.js"

const ModelPlayground = ({ activeLayers, setActiveLayers, activeId, setActiveId }) => {
  const removeLayer = (uid) => {
    if (uid === activeId) {
      setActiveId(null);
    }
    setActiveLayers(activeLayers.filter(item => item.uid !== uid));
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
        activeLayers.map((obj, index) => (
          <div>
            <StaticLayer 
              color={ obj.color } 
              name={ obj.label } 
              handleClick={ () => setActiveId(obj.uid) }
              removable={ index === 0 ? false : true}
              onRemove={ () => removeLayer(obj.uid) }
            />
            { index !== (activeLayers.length - 1) ? (
                <div
                  style={{
                    margin: "0 auto",
                    height: "16px",
                    width: "3px",
                    backgroundColor: "#808080",
                  }}
                >
                </div>
            ) : (
              <>
              </>
            )
            }
          </div>
        ))
      }
    </div>
  )
}

export default ModelPlayground;
