import Layer from "./Layer.js"

class Input extends Layer {
  label = "Input"
  color = "#00BC03"
  width = 32
  height = 32
  depth = 3

  constructor(uid, width, height, depth) {
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
