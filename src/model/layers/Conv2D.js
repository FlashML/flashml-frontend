import Layer from "./Layer.js"

class Conv2D extends Layer {
  name = "Convolution 2D"
  color = "#005DBC"
  numFilters = 32
  kernelSize = 2
  stride = 2

  toJson() {
    return [this.name, this.numFilters, this.kernelSize]
  }
}

export default Conv2D;
