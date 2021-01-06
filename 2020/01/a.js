#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const input = fs
  .readFileSync(path.join(__dirname, 'input'), 'utf8')
  .split('\n')
  .map((n) => parseInt(n, 10))

let a = 0
let b = 0
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === 2020) {
      a = input[i]
      b = input[j]
    }
  }
}

console.log(a * b)
