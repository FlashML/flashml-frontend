
import React from "react";

const ModelPlayground = ({ activeLayers }) => {
  return (
    <div
      className="border rounded text-center py-3"
      style={{
        backgroundColor: "#F2F2F2",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      {
        activeLayers.map((val, key) => (
          <p>{val.id} : {val.name}</p>
        ))
      }
    </div>
  )
}

export default ModelPlayground;
