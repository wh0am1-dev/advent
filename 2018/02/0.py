#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys

# --------------------------------

def rep(n, id):
  for char in id:
    if id.count(char) == n:
      return 1

  return 0

# --------------------------------

if __name__ == '__main__':

  with open(os.path.join(sys.path[0], 'input.txt')) as f:
    data = f.read().splitlines()

  two = 0
  three = 0

  for id in data:
    two += rep(2, id)
    three += rep(3, id)

  print(two * three)
