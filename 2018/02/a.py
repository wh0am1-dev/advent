#!/usr/bin/env python
# -*- coding: utf-8 -*-

def rep(n, id):
  for char in id:
    if id.count(char) == n:
      return 1

  return 0


if __name__ == '__main__':
  twos = 0
  threes = 0

  with open('input.txt') as f:
    data = f.read().splitlines()

  for id in data:
    twos += rep(2, id)
    threes += rep(3, id)

  print(twos * threes)
