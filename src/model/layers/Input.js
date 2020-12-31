import Layer from "./Layer.js"

class Input extends Layer {
  label = "Input"
  color = "#00BC03"

  constructor(uid, width=32, height=32, depth=3) {
    super(uid)
    this.width = width
    this.height = height
    this.depth = depth
  }

  toJson() {
    return ["input", this.width, this.height, this.depth]
  }

}

export default Input;
