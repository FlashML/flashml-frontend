import Layer from "./Layer.js"

class Input extends Layer {
  name = "Input"
  color = "#00BC03"
  width = 32
  height = 32
  depth = 3

  getWidth() {
    return this.width
  }

  setWidth(w) {
    this.width = w
  }

  setHeight(h) {
    this.height = h
  }

  getHeight() {
    return this.height
  }

  setDepth(d) {
    this.depth = d
  }

  getDepth() {
    return this.depth
  }
}

export default Input;
