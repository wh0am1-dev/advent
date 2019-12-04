class Vec2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

const NORMALS = {
  U: new Vec2(0, 1),
  R: new Vec2(1, 0),
  D: new Vec2(0, -1),
  L: new Vec2(-1, 0)
}

class Wire {
  constructor(path) {
    this.vertices = []
  }
}

module.exports = Wire
