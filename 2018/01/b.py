#!/usr/bin/env python
# -*- coding: utf-8 -*-

if __name__ == '__main__':
  with open('input.txt') as f:
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
