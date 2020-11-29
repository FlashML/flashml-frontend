import Input from "../layers/Input.js";
import Conv2D from "../layers/Conv2D.js";
import Relu from "../layers/Relu.js";
import MaxPool from "../layers/MaxPool.js";
import FullyConnected from "../layers/FullyConnected.js";
import Dropout from "../layers/Dropout.js";

const availableLayers = ["Convolution 2D", "Relu", "Maxpool 2D", "Dropout", "Fully Connected"];

class LayerFactory {
  static uid = 0

  /** 
   * Returns the model class associated with the given name
   **/
  static createLayerFromName(name, incrementId=true) {
    var result;
    switch (name) {
      case "Input":
        result = new Input(LayerFactory.uid);
        break;
      case "Convolution 2D":
        result = new Conv2D(LayerFactory.uid);
        break;
      case "Relu":
        result = new Relu(LayerFactory.uid);
        break;
      case "Maxpool 2D":
        result = new MaxPool(LayerFactory.uid);
        break;
      case "Fully Connected":
        result = new FullyConnected(LayerFactory.uid);
        break;
      case "Dropout":
        result = new Dropout(LayerFactory.uid);
        break;
      default:
        throw new Error("Layer with name: " + name + " does not exist");
    }

    if (incrementId) {
      LayerFactory.uid += 1;
    }
    return result;
  }

  /** 
   * Returns a layer object for each available layer
   **/
  static getAllAvailableLayers() {
    return availableLayers.map(name => LayerFactory.createLayerFromName(name, false));
  }
}

export default LayerFactory;
