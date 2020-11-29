class Layer {
  constructor(uid) {
    this.uid = uid
  }

  setWidth(w) {
    this.width = w
  }

  getWidth() {
    return this.width
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

export default Layer;
