#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys

# --------------------------------

class Fabric:

  def __init__(self, size=1000):
    self.ids = {}
    self.fab = []

    for i in range(size):
      self.fab.append([])
      for j in range(size):
        self.fab[i].append('.')


  def claim(self, c):
    id_, origin, size = self._decode(c)
    self.ids[id_] = True

    for i in range(origin[0], origin[0] + size[0]):
      for j in range(origin[1], origin[1] + size[1]):
        if self.fab[i][j] == '.':
          self.fab[i][j] = id_
        else:
          self.ids[id_] = False
          self.ids[self.fab[i][j]] = False


  def noverlap(self):
    return [k for k,v in self.ids.items() if v][0]


  def _decode(self, line):
    line = ''.join(line.split(' ')).split('@')
    id_ = int(line[0][1:])

    origin, size = tuple(line[1].split(':'))
    origin = [int(o) for o in origin.split(',')]
    size = [int(s) for s in size.split('x')]

    return (id_, origin, size)

# --------------------------------

if __name__ == '__main__':

  with open(os.path.join(sys.path[0], 'input.txt')) as f:
    data = f.read().splitlines()

  fab = Fabric()
  for c in data:
    fab.claim(c)

  print(fab.noverlap())
