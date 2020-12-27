import Layer from "./Layer.js"

class FullyConnected extends Layer {
  label = "Fully Connected"
  color = "#4E00B5"
  size = 256

  toJson() {
    return ["dense", this.size]
  }
}

export default FullyConnected;
