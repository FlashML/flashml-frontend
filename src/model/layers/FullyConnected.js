import Layer from "./Layer.js"

class FullyConnected extends Layer {
  name = "Fully Connected"
  color = "#4E00B5"
  size = 256

  toJson() {
    return [this.name, this.size]
  }
}

export default FullyConnected;
