#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const Vec2 = require('./Vec2')
const Wire = require('./Wire')

const origin = new Vec2(0, 0)
const manhattan = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y)

const [wireA, wireB] = fs
  .readFileSync(path.join(__dirname, 'input'), 'utf8')
  .split('\n')
  .map(wire => wire.split(','))
  .map(wire => new Wire(wire))

const min = wireA
  .intersections(wireB)
  .map(p => manhattan(p, origin))
  .reduce((acc, val) => Math.min(acc, val))

console.log(min)
