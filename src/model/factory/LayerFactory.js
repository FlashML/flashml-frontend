import Input from "../layers/Input.js";
import Conv2D from "../layers/Conv2D.js";
import Relu from "../layers/Relu.js";
import MaxPool from "../layers/MaxPool.js";
import FullyConnected from "../layers/FullyConnected.js";

export const layers = {
  Input: "Input",
  Conv2D: "Convolution 2D", 
  Relu: "Relu", 
  MaxPool: "Maxpool 2D", 
  FullyConnected: "Fully Connected",
}

const availableLayers = [layers.Conv2D, layers.Relu, layers.MaxPool, layers.FullyConnected];

class LayerFactory {
  static uid = 0

  /** 
   * Returns the model class associated with the given name
   **/
  static createLayerFromName(name, incrementId=true) {
    var result;
    switch (name) {
      case layers.Input:
        result = new Input(LayerFactory.uid);
        break;
      case layers.Conv2D:
        result = new Conv2D(LayerFactory.uid);
        break;
      case layers.Relu:
        result = new Relu(LayerFactory.uid);
        break;
      case layers.MaxPool:
        result = new MaxPool(LayerFactory.uid);
        break;
      case layers.FullyConnected:
        result = new FullyConnected(LayerFactory.uid);
        break;
      default:
        throw new Error("Layer with name: " + name + " does not exist");
    }

    if (incrementId) {
      LayerFactory.uid += 1;
    }
    return result;
  }

  static creatLayerFromList(layerConfigList) {
    var result;
    var name = layerConfigList[0]
    switch (name) {
      case "input":
        var width = layerConfigList[1];
        var height = layerConfigList[2];
        var depth = layerConfigList[3];
        result = new Input(LayerFactory.uid, width, height, depth);
        break;
      case "conv2d":
        var numFilters = layerConfigList[1];
        var kernelSize = layerConfigList[2];
        result = new Conv2D(LayerFactory.uid, numFilters, kernelSize);
        break;
      case "relu":
        result = new Relu(LayerFactory.uid);
        break;
      case "maxpool2d":
        var kernel = layerConfigList[1];
        result = new MaxPool(LayerFactory.uid, kernel);
        break;
      case "dense":
        var size = layerConfigList[1];
        result = new FullyConnected(LayerFactory.uid, size);
        break;
      default:
        throw new Error("Layer with name: " + name + " does not exist");
    }
    LayerFactory.uid += 1;
    return result;
  }

  /** 
   * Returns a layer object for each available layer
   **/
  static getAllAvailableLayers() {
    var layers = availableLayers.map(name => LayerFactory.createLayerFromName(name, false))
    return layers;
  }
}

export default LayerFactory;
