import React from "react";

import InputLayerConfig from "./InputLayerConfig.js"
import ConvLayerConfig from "./ConvLayerConfig.js"
import ReluLayerConfig from "./ReluLayerConfig.js"
import MaxpoolLayerConfig from "./MaxpoolLayerConfig.js"
import FcLayerConfig from "./FcLayerConfig.js"
import DropoutLayerConfig from "./DropoutLayerConfig.js"

const LayerConfigForm = ({ layer, setActiveId }) => {
  console.log(layer.name)
  switch (layer.name) {
    case "Input":
      return <InputLayerConfig layer={layer} setActiveId={setActiveId} />
    case "Convolution 2D":
      return <ConvLayerConfig layer={layer} setActiveId={setActiveId} />
    case "Relu":
      return <ReluLayerConfig layer={layer} setActiveId={setActiveId} />
    case "Maxpool 2D":
      return <MaxpoolLayerConfig layer={layer} setActiveId={setActiveId} />
    case "Fully Connected":
      return <FcLayerConfig layer={layer} setActiveId={setActiveId} />
    case "Dropout":
      return <DropoutLayerConfig layer={layer} setActiveId={setActiveId} />
    default:
      throw new Error("Layer with name: " + layer.name + " does not exist");
  }
}

export default LayerConfigForm;
