const NORMALS = {
  U: new Vec2(0, 1),
  R: new Vec2(1, 0),
  D: new Vec2(0, -1),
  L: new Vec2(-1, 0)
}

// ================================

class Wire {
  constructor(path) {
    this.vertices = [new Vec2(0, 0)]

    path.forEach(trans => {
      const direction = trans.charAt(0)
      const amount = parseInt(trans.slice(1))
      const origin = this.vertices[this.vertices.length - 1]

      this.vertices.push(origin.add(NORMALS[direction].mul(amount)))
    })

    this.vertices.map((vert, i) => {
      if (i >= this.vertices.length - 1) return null
      return new Segment(vert, this.vertices[i + 1])
    })

    this.vertices.pop()
  }
}

// ================================

class Segment {
  constructor(a, b) {
    this.a = a.x < b.x || a.y < b.y ? a : b
    this.b = a.x < b.x || a.y < b.y ? b : a
  }

  get orientation() {
    if (this.a.x === this.b.x) return 'v'
    if (this.a.y === this.b.y) return 'h'
    return undefined
  }

  intersects(s) {
    if (this.orientation === s.orientation) return false

    const sv = this.orientation === 'v' ? this : s
    const sh = this.orientation === 'h' ? this : s

    return false // TODO: implement
  }
}

// ================================

class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  mul(s) {
    return new Vec2(this.x * s, this.y * s)
  }

  add(v) {
    return new Vec2(this.x + v.x, this.y + v.y)
  }
}

// ================================

module.exports = Wire
