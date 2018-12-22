#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys

# --------------------------------

if __name__ == '__main__':

  with open(os.path.join(sys.path[0], 'input.txt')) as f:
    data = [int(n) for n in f.read().splitlines()]

  freq = 0
  history = []

  while not freq in history:
    for n in data:
      history += [freq]
      freq += n

      if freq in history:
        break

  print(freq)
