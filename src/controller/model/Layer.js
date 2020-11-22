import React from "react";

import StaticLayer from "components/Layers/StaticLayer.js"

class Layer {
  color = null
  name = null

  constructor(uid) {
    this.uid = uid
  }

  renderComponent(setActiveId) {
    return (
      <StaticLayer 
        color={ this.color } 
        name={ this.name } 
        handleClick={ () => setActiveId(this.uid) }
      />
    )
  }
}

export default Layer;
