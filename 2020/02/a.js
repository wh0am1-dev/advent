#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const validate = (line) => {
  const [range, mid, password] = line.split(' ')
  const [min, max] = range.split('-').map((n) => parseInt(n, 10))
  const char = mid[0]

  const count = password.split('').reduce((prev, curr) => (curr === char ? prev + 1 : prev), 0)
  return count >= min && count <= max
}

const count = fs
  .readFileSync(path.join(__dirname, 'input'), 'utf8')
  .split('\n')
  .map(validate)
  .reduce((prev, curr) => (curr ? prev + 1 : prev), 0)

console.log(count)
