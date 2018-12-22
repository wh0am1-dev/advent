#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys

# --------------------------------

def compare(a, b):
  c = 0
  d = ''

  for i in range(len(a)):
    if a[i] == b[i]:
      d += a[i]
    else:
      c += 1

  return (c, d)

# --------------------------------

def search(data):
  for i in range(len(data)):
    for j in range(i + 1, len(data)):
      c, d = compare(data[i], data[j])

      if c == 1:
        return d

  return None

# --------------------------------

if __name__ == '__main__':

  with open(os.path.join(sys.path[0], 'input.txt')) as f:
    data = f.read().splitlines()

  print(search(data))
