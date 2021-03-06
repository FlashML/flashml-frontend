import Layer from "./Layer.js"

class Conv2D extends Layer {
  label = "Convolution 2D"
  color = "#005DBC"

  constructor(uid, numFilters=32, kernelSize=5) {
    super(uid)
    this.numFilters = numFilters;
    this.kernelSize = kernelSize;
  }

  toJson() {
    return ["conv2d", this.numFilters, this.kernelSize]
  }
}

export default Conv2D;
