#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const Computer = require('./Computer')

const rom = fs
  .readFileSync(path.join(__dirname, 'input'), 'utf8')
  .split(',')
  .map(n => parseInt(n, 10))

const computer = new Computer(rom)
computer.poke(1, 12)
computer.poke(2, 2)
computer.compute()

console.log(computer.peek(0))
