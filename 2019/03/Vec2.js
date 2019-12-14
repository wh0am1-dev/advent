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

module.exports = Vec2
