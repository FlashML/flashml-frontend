import Layer from "./Layer.js"

class MaxPool extends Layer {
  label = "Maxpool 2D"
  color = "#939393"
  kernelSize = 2

  toJson() {
    return ["maxpool2d", this.kernelSize]
  }
}

export default MaxPool;
