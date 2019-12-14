const Vec2 = require('./Vec2')

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

module.exports = Segment
