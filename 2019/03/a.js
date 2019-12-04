#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const wires = fs
  .readFileSync(path.join(__dirname, 'input'), 'utf8')
  .split('\n')
  .map(wire => wire.split(','))
