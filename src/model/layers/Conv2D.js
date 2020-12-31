import Layer from "./Layer.js"

class Conv2D extends Layer {
  label = "Convolution 2D"
  color = "#005DBC"
  numFilters = 32
  kernelSize = 2

  toJson() {
    return ["conv2d", this.numFilters, this.kernelSize]
  }
}

export default Conv2D;
