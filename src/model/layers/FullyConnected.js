import Layer from "./Layer.js"

class FullyConnected extends Layer {
  label = "Fully Connected"
  color = "#33D2B3"

  constructor(uid, size=256) {
    super(uid)
    this.size = size
  }

  toJson() {
    return ["dense", this.size]
  }
}

export default FullyConnected;
