import Layer from "./Layer.js"

class Input extends Layer {
  name = "Input"
  color = "#00BC03"
  width = 32
  height = 32
  depth = 3

  toJson() {
    return [this.name, this.width, this.height, this.depth]
  }

}

export default Input;
