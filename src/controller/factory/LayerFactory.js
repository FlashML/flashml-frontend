import Layer from "controller/model/Layer.js"
import Input from "controller/model/Input.js";
import Conv2D from "controller/model/Conv2D.js";
import Relu from "controller/model/Relu.js";
import MaxPool from "controller/model/MaxPool.js";

const availableLayers = ["Input", "Convolution 2D", "Relu", "Maxpool 2D"];

class LayerFactory {
  /** 
   * Returns the model class associated with the given name
   **/
  static createLayerFromName(name) {
    switch (name) {
      case "Input":
        return new Input();
      case "Convolution 2D":
        return new Conv2D();
      case "Relu":
        return new Relu();
      case "Maxpool 2D":
        return new MaxPool();
      default:
        throw new Error("Layer with name: " + name + " does not exist");
    }
  }

  /** 
   * Returns a layer object for each available layer
   **/
  static getAllAvailableLayers() {
    return availableLayers.map(name => LayerFactory.createLayerFromName(name));
  }
}

export default LayerFactory;
