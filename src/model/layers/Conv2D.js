import Layer from "./Layer.js"

class Conv2D extends Layer {
  name = "Convolution 2D"
  color = "#005DBC"
  kernelSize = 2
  numFilters = 32
  stride = 2
}

export default Conv2D;
