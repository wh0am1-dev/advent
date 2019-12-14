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

const inRange = (x, a, b) => (x - a) * (x - b) <= 0

const ORIENTATIONS = {
  V: 'V',
  H: 'H'
}

class Segment {
  constructor(a, b) {
    this.a = a.x < b.x || a.y < b.y ? a : b
    this.b = a.x < b.x || a.y < b.y ? b : a
  }

  get orientation() {
    if (this.a.x === this.b.x) return ORIENTATIONS.V
    if (this.a.y === this.b.y) return ORIENTATIONS.H
    return undefined
  }

  intersect(s) {
    if (this.orientation === s.orientation) return undefined

    const sv = this.orientation === ORIENTATIONS.V ? this : s
    const sh = this.orientation === ORIENTATIONS.H ? this : s

    // sh.a.x <= sv.a.x && sv.a.x <= sh.b.x && sv.a.y <= sh.a.y && sh.a.y <= sv.b.y
    if (inRange(sv.a.x, sh.a.x, sh.b.x) && inRange(sh.a.y, sv.a.y, sv.b.y))
      return new Vec2(sv.a.x, sh.a.y)

    return undefined
  }
}

// ================================

const NORMALS = {
  U: new Vec2(0, 1),
  R: new Vec2(1, 0),
  D: new Vec2(0, -1),
  L: new Vec2(-1, 0)
}

class Wire {
  constructor(path) {
    this.vertices = [new Vec2(0, 0)]

    path.forEach(trans => {
      const direction = trans.charAt(0)
      const amount = parseInt(trans.slice(1))
      const origin = this.vertices[this.vertices.length - 1]

      this.vertices.push(NORMALS[direction].mul(amount).add(origin))
    })

    this.segments = this.vertices.map((vert, i) => {
      if (i >= this.vertices.length - 1) return null
      return new Segment(vert, this.vertices[i + 1])
    })

    this.segments.pop()
  }
}

// ================================

module.exports = { Wire, Segment, Vec2 }
