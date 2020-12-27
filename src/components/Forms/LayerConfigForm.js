import React from "react";

import InputLayerConfig from "./InputLayerConfig.js"
import ConvLayerConfig from "./ConvLayerConfig.js"
import ReluLayerConfig from "./ReluLayerConfig.js"
import MaxpoolLayerConfig from "./MaxpoolLayerConfig.js"
import FcLayerConfig from "./FcLayerConfig.js"

import Input from "../../model/layers/Input.js";
import Conv2D from "../../model/layers/Conv2D.js";
import Relu from "../../model/layers/Relu.js";
import MaxPool from "../../model/layers/MaxPool.js";
import FullyConnected from "../../model/layers/FullyConnected.js";

import { layers } from "../../model/factory/LayerFactory.js"

const LayerConfigForm = ({ layer, setActiveId }) => {
  switch (layer.label) {
    case layers.Input:
      return <InputLayerConfig layer={layer} setActiveId={setActiveId} />
    case layers.Conv2D:
      return <ConvLayerConfig layer={layer} setActiveId={setActiveId} />
    case layers.Relu:
      return <ReluLayerConfig layer={layer} setActiveId={setActiveId} />
    case layers.MaxPool:
      return <MaxpoolLayerConfig layer={layer} setActiveId={setActiveId} />
    case layers.FullyConnected:
      return <FcLayerConfig layer={layer} setActiveId={setActiveId} />
    default:
      throw new Error("Layer with name: " + layer.label + " does not exist");
  }
}

export default LayerConfigForm;
