class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  mul(s = 1) {
    return new Vec2(this.x * s, this.y * s)
  }

  add(v = new Vec2()) {
    return new Vec2(this.x + v.x, this.y + v.y)
  }
}

class Segment {
  constructor(a = new Vec2(), b = new Vec2()) {
    this.a = a
    this.b = b
  }

  intersects(s = new Segment()) {
    return false
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
    this.vertices = [new Vec2(0, 0)]

    path.forEach(edge => {
      const direction = edge.charAt(0)
      const quantity = parseInt(edge.slice(1))
    })
  }
}

module.exports = Wire
