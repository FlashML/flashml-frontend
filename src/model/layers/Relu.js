import Layer from "./Layer.js"

class Relu extends Layer {
  name = "Relu"
  color = "#EACF00"

  toJson() {
    return [this.name]
  }
}

export default Relu;
