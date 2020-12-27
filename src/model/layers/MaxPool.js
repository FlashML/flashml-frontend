import Layer from "./Layer.js"

class MaxPool extends Layer {
  label = "Maxpool 2D"
  color = "#939393"
  kernelSize = 2
  stride = 2

  toJson() {
    return ["maxpool2d", this.kernelSize, this.stride]
  }
}

export default MaxPool;
