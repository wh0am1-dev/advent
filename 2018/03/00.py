#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys

# --------------------------------

class Fabric:

  def __init__(self, size=1000):
    self.fab = []

    for i in range(size):
      self.fab.append([])
      for j in range(size):
        self.fab[i].append('.')


  def claim(self, c):
    origin, size = self._decode(c)

    for i in range(origin[0], origin[0] + size[0]):
      for j in range(origin[1], origin[1] + size[1]):
        self.fab[i][j] = '#' if self.fab[i][j] == '.' else '?'


  def conflict(self):
    return sum([len([c for c in l if c == '?']) for l in self.fab])


  def _decode(self, line):
    line = ''.join(''.join(line.split('@')[1:]).split(' '))

    origin, size = tuple(line.split(':'))
    origin = [int(o) for o in origin.split(',')]
    size = [int(s) for s in size.split('x')]

    return (origin, size)

# --------------------------------

if __name__ == '__main__':

  with open(os.path.join(sys.path[0], 'input.txt')) as f:
    data = f.read().splitlines()

  fab = Fabric()
  for c in data:
    fab.claim(c)

  print(fab.conflict())
