const Vec2 = require('./Vec2')
const Segment = require('./Segment')

const NORMALS = {
  U: new Vec2(0, 1),
  R: new Vec2(1, 0),
  D: new Vec2(0, -1),
  L: new Vec2(-1, 0)
}

class Wire {
  constructor(path, origin) {
    if (!origin) origin = new Vec2(0, 0)
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

  intersections(w) {
    const intersections = []

    this.segments.forEach(segmentA => {
      w.segments.forEach(segmentB => {
        const p = segmentA.intersect(segmentB)
        if (p) intersections.push(p)
      })
    })

    return intersections
  }
}

// ================================

module.exports = Wire
