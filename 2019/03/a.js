#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { Wire, Vec2 } = require('./Wire')

const origin = new Vec2(0, 0)
const manhattan = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y)

const wires = fs
  .readFileSync(path.join(__dirname, 'input'), 'utf8')
  .split('\n')
  .map(wire => wire.split(','))
  .map(wire => new Wire(wire))

const intersections = []
wires[0].segments.forEach(segmentA => {
  wires[1].segments.forEach(segmentB => {
    const p = segmentA.intersect(segmentB)
    if (p) intersections.push(p)
  })
})

const min = intersections.map(p => manhattan(p, origin)).reduce((acc, val) => Math.min(acc, val))
console.log(min)
