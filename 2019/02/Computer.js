const { cloneDeep } = require('lodash')

class Computer {
  constructor(rom = []) {
    this._ISA = {
      inst: {
        length: 4,
        opcode: 0,
        opA: 1,
        opB: 2,
        dest: 3
      },
      1: (a, b) => a + b,
      2: (a, b) => a * b,
      99: null
    }

    this.load(rom)
  }

  load(rom = []) {
    this._ram = cloneDeep(rom)
    this._pointer = 0
  }

  peek(pointer) {
    return this._ram[pointer]
  }

  poke(pointer, value) {
    this._ram[pointer] = value
  }

  compute() {
    while (this._op) {
      this._dest = this._op(this._opA, this._opB)
      this._pointer += this._ISA.inst.length
    }
  }

  get _op() {
    return this._ISA[this._ram[this._pointer + this._ISA.inst.opcode]]
  }

  get _opA() {
    return this._ram[this._ram[this._pointer + this._ISA.inst.opA]]
  }

  get _opB() {
    return this._ram[this._ram[this._pointer + this._ISA.inst.opB]]
  }

  set _dest(value) {
    this._ram[this._ram[this._pointer + this._ISA.inst.dest]] = value
  }
}

module.exports = Computer
