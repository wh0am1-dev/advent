#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const fuel = mass => Math.floor(mass / 3) - 2

const ans = fs
  .readFileSync(path.join(__dirname, 'input'), 'utf8')
  .split('\n')
  .map(n => parseInt(n, 10))
  .reduce((acc, n) => acc + fuel(n), 0)

console.log(ans)
