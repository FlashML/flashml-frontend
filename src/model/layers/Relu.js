import Layer from "./Layer.js"

class Relu extends Layer {
  label = "Relu"
  color = "#EACF00"

  toJson() {
    return ["relu"]
  }
}

export default Relu;
