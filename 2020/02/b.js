#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const xor = (a, b) => (a || b) && !(a && b)

const validate = (line) => {
  const [range, mid, password] = line.split(' ')
  const [first, last] = range.split('-').map((n) => parseInt(n, 10))
  const char = mid[0]
  return xor(char === password.charAt(first - 1), char === password.charAt(last - 1))
}

const count = fs
  .readFileSync(path.join(__dirname, 'input'), 'utf8')
  .split('\n')
  .map(validate)
  .reduce((prev, curr) => (curr ? prev + 1 : prev), 0)

console.log(count)
