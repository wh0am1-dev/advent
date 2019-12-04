#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const ans = fs
  .readFileSync(path.join(__dirname, 'input'), 'utf8')
  .split('\n')
  .map(n => parseInt(n, 10))
  .map(n => Math.floor(n / 3) - 2)
  .reduce((acc, n) => acc + n, 0)

console.log(ans)
