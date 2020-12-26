import Layer from "./Layer.js"

class MaxPool extends Layer {
  name = "Maxpool 2D"
  color = "#939393"
  kernelSize = 2
  stride = 2

  toJson() {
    return [this.name, this.kernelSize, this.stride]
  }
}

export default MaxPool;
