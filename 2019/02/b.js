#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const Computer = require('./Computer')

const rom = fs
  .readFileSync(path.join(__dirname, 'input'), 'utf8')
  .split(',')
  .map(n => parseInt(n, 10))

const computer = new Computer()

const FROM = 0
const TO = 99
const SEEK = 19690720
let found = false

for (let i = FROM; !found && i <= TO; i++) {
  for (let j = FROM; !found && j <= TO; j++) {
    computer.load(rom)
    computer.poke(1, i)
    computer.poke(2, j)
    computer.compute()

    found = computer.peek(0) === SEEK
  }
}

console.log(100 * computer.peek(1) + computer.peek(2))
