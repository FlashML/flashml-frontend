import Layer from "./Layer.js"

class FullyConnected extends Layer {
  label = "Fully Connected"
  color = "#33D2B3"
  size = 256

  toJson() {
    return ["dense", this.size]
  }
}

export default FullyConnected;
