#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

function fuel(mass) {
  if (mass <= 0) return 0
  const f = Math.max(Math.floor(mass / 3) - 2, 0)
  return f + fuel(f)
}

const ans = fs
  .readFileSync(path.join(__dirname, 'input'), 'utf8')
  .split('\n')
  .map(n => parseInt(n, 10))
  .reduce((acc, n) => acc + fuel(n), 0)

console.log(ans)
